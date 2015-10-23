from winappdbg import Debug, HexDump, win32, Thread, CrashDump, System, EventHandler, EventSift
import sys
from multiprocessing import Process, Manager
import time
import hashlib

class CrashHandler(EventHandler):

	def __init__(self,q):
		#pass
		super(CrashHandler,self).__init__()
		self.queue = q


	def create_process(self,event):
		try:
			lpStartAddress = event.get_start_address()
			szFilename = event.get_filename()
			if not szFilename:
				szFilename = Module.unknown
			if lpStartAddress:
				where = HexDump.address(lpStartAddress)
				msg = "Process %s started, entry point at %s"
				msg = msg % (szFilename, where)
			else:
				msg = "Attached to process %s" % szFilename
			print msg
		finally:
			pass



	def access_violation(self,event):
		# Get the process ID where the event occured.
        	pid = event.get_pid()
       		# Get the thread ID where the event occured.
        	tid = event.get_tid()
        	# Find out if it's a 32 or 64 bit process.
        	bits = event.get_process().get_bits()
        	# Get the value of EIP at the thread.
        	address = event.get_thread().get_pc()
        	# Get the event name.
        	name = event.get_event_name()
        	# Get the event code.
        	code = event.get_event_code()
        	# If the event is an exception...
        	if code == win32.EXCEPTION_DEBUG_EVENT and event.is_last_chance():
	        # Get the exception user-friendly description.
	                name = event.get_exception_description()
       	         	# Get the exception code.
       	         	code = event.get_exception_code()
                	# Get the address where the exception occurred.
                	try:
                        	address = event.get_fault_address()
                	except NotImplementedError:
                        	address = event.get_exception_address()
        		#print HexDump.address(address, bits)			
        		if HexDump.address(address, bits) == "FFFFFFFFFFFFFFFF" or HexDump.address(address, bits) == "0000000000000000":
					sys.exit()
        		print "-" * 79					
        		format_string = "%s (0x%s) at address 0x%s, process %d, thread %d"
        		message = format_string % ( name,
             		   				HexDump.integer(code, bits),
                                    HexDump.address(address, bits),
                                        	pid,
                                        	tid )

        		#print message
        		#self.queue.put(message)
        		msg = _thread_context(tid, message)
        		self.queue.append([msg,str(code),str(HexDump.address(address, bits))])
        		#print_thread_context(tid)
        		print msg
			sys.exit()
			#event.get_process().kill()
			#debug.kill_all(bIgnoreExceptions = True)
			#print_thread_context(tid)


def _thread_context( tid, msg ):
	# Request debug privileges.
	System.request_debug_privileges()
	# Instance a Thread object.
	thread = Thread( tid )
	# Suspend the thread execution.
	thread.suspend()
	# Get the thread context.
	try:
		context = thread.get_context()
		# Resume the thread execution.
		eip = thread.get_pc()
		code = thread.disassemble( eip, 0x10 )
		# You can also do this:
		# code = thread.disassemble_around_pc()
		# Or even this:
		# process = thread.get_process()
		# code = process.disassemble_around( eip )
	finally:
		thread.resume()
	# Save the thread context.
	msg += '\r\n'
	msg += CrashDump.dump_registers( context )
	msg += CrashDump.dump_code( code, eip)			
	return msg		
	
def print_thread_context( tid ):
	# Request debug privileges.
	System.request_debug_privileges()
	# Instance a Thread object.
	thread = Thread( tid )
	# Suspend the thread execution.
	thread.suspend()
	# Get the thread context.
	try:
		context = thread.get_context()
		# Resume the thread execution.
		eip = thread.get_pc()
		code = thread.disassemble( eip, 0x10 )
		# You can also do this:
		# code = thread.disassemble_around_pc()
		# Or even this:
		# process = thread.get_process()
		# code = process.disassemble_around( eip )
	finally:
		thread.resume()
	# Display the thread context.
	print
	print CrashDump.dump_registers( context )
	print CrashDump.dump_code( code, eip)

class Debugger():

	def __init__(self,q):
		self.queue = q
		#pass
	def _debug_loop(self,debug):
            # Wait for debug events, with an optional timeout.
            while 1:
                try:
                    debug.wait(100)
                    break
                except WindowsError, e:
                    if e.winerror not in (win32.ERROR_SEM_TIMEOUT,
                                          win32.WAIT_TIMEOUT):

                        raise   # don't ignore this error

            try:
				debug.dispatch()
				debug.cont()
            except Exception:
                    raise		
					
	def run_Browser(self,Type):
		self.dbg = Debug()
		self.system = System()
		self.system.request_debug_privileges()
		# run the browser
		# cdb.exe -o -p 4316 -c ".attach 4456;~*m;g;~*m;g"t
		# CheckNetIsolation.exe LoopbackExempt -a -n=Spartan_cw5n1h2txyewy
		#CheckNetIsolation.exe LoopbackExempt -s -n=microsoft.windows.spartan_cw5n1h2txyewy
		#Microsoft.MicrosoftEdge_8wekyb3d8bbwe
		self.evth = CrashHandler(self.queue)
		# Create the debug object
		#with Debug(evth) as debug:
		self.debug = Debug(self.evth, bKillOnExit = True)
		
		self.exe = 'C:\Windows\SystemApps\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\MicrosoftEdge.exe'
		#self.cmd = 'explorer.exe shell:AppsFolder\Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge'
		self.cmd = 'explorer.exe http://127.0.0.1:8000/wait'
		self.rt_broker = 'C:\Windows\System32\RuntimeBroker.exe'
		self.sp_edge = 'C:\Windows\SystemApps\Microsoft.MicrosoftEdge_8wekyb3d8bbwe\MicrosoftEdgeCP.exe'
		#self.p = self.dbg.system.start_process(self.cmd)
		self.p = self.dbg.system.start_process(self.cmd)
		
		time.sleep(4)
		#system.scan_processes(C:\Windows\System32\RuntimeBroker.exe)
		self.p1 = None
			#try:
		self.p1,self.p1name = self.system.find_processes_by_filename(self.exe)[0]
		#	except:
		#		continue
		#p1.suspend()
		self.matched = None
		#	try:		
		self.matched = self.system.find_processes_by_filename(self.sp_edge)	
		self.broker_process,self.broker_name = self.system.find_processes_by_filename(self.rt_broker)[0]
	#		except:
	#			continue
		
		# Run the Debug object with the event handler
		#try:
		with self.debug:
			self.debug.attach(self.broker_process.get_pid())		
			self.debug.attach(self.p1.get_pid())
			#self.p2, self.n = self.matched
			for self.p2, self.n in self.matched:
				self.debug.attach(self.p2.get_pid())
			#self.p.resume()
			self.debug.loop()
			#self._debug_loop(self.debug)
		#except:
			#debug.kill_all(bIgnoreExceptions = True)
		#	print 'Error'
			#if len(self.queue):
				#print self.queue.pop()
			#sys.exit()
			#self.queue.append("No Error")
			#self.queue.put("No Error")

if __name__ == '__main__':
	d = Debugger(Manager().list())	
	d.run_Browser('IE')

