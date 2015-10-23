import sys
import os
from multiprocessing import Process, Queue, Manager
from threading import Timer
from wadi_harness import Harness
from wadi_debug_win import Debugger
import time
import hashlib


def test(msg):
	while True:
		print 'Process 2:' + msg
	#print msg

def test2():
	print 'Process 1'
	time.sleep(2)
	while True:
		print 'Process 1'

def run_harness(t):
	harness = Harness(sys.argv[1],sys.argv[2],t)
	harness.run()

def run_debugger(q):
	debugger = Debugger(q)
	debugger.run_Browser('IE')

def timeout_debug(dp):
	print '[*] Terminating Debugger Process PID: %d' % dp.pid
	dp.terminate()
	

class wadi():
	def __init__(self, args=None):
		if args:
			self.args = args
		else:
			pass
	
	def writeTestCases(self,tcases,msg):
		self.msg = msg[0]
		self.code = msg[1]
		self.add = msg[2]
		self.testcases = tcases
		self.hash = hashlib.md5()
		self.b = self.code+self.add
		self.hash.update(self.b)
		self.dgst = self.hash.hexdigest()
		self.path = "./"+self.dgst
		if os.path.exists(self.path):
			print "[*] Duplicate Crash: %s" % self.dgst
		else:
			os.makedirs(self.path)
			f = open(self.path + "/" +self.dgst+".crash","w+b")
			f.write(self.msg)
			f.close()
			print "[*] Written Crash file to: %s" % self.dgst+".crash"
			for i in range(10):
				self.tcase = self.testcases.pop()
				f2 = open(self.path+"/"+self.dgst+"_"+str(i)+".html","w+b")
				f2.write(self.tcase)
				f2.close()
				print "[*] Written testcases to %s" % self.path+"/"+self.dgst+str(i)+".html"
		print "[*] Last TestCase Folder '%s'" % self.dgst		
	
	def close(self):
		sys.exit()	

	def run(self):
		self.queue = Manager().list()
		self.tcases = Manager().list()
		self.server_pid = None
		self.debugger_pid = None
		self.init = 0
		
		
		
		while True:
			
			if not self.server_pid:
				self.server_process = Process(target=run_harness, args=(self.tcases,))
				self.server_process.start()
				self.server_pid  = self.server_process.pid
				print '[*] Running Server Process %s ' % (self.server_pid,)
				#self.server_pid = 
		
			if not self.debugger_pid:
				self.debugger_process = Process(target=run_debugger,args=(self.queue,))				
				self.debugger_process.start()
				self.debugger_pid  = self.debugger_process.pid
				timer = Timer(120.0,timeout_debug,(self.debugger_process,))
				timer.daemon = True
				timer.start()
				
			
			if not self.debugger_process.is_alive():
					print "[*] Debugger Process %s exited" % self.debugger_pid
					timer.cancel()
					self.lenq = len(self.queue)
					self.lentc = len(self.tcases)
					if self.lenq:
						self.msg = self.queue.pop()
						#self.msg = self.queue.get()
						print "[*] Wooops Crash !!!!"
						print "[*] %s" % self.msg[0]
					else:
						print "[*] No Crashes"
					#if not self.tcases.empty():
					if self.lentc and self.lenq:
						#self.tc = self.tcases.get()
						self.writeTestCases(self.tcases, self.msg)
						
					else:
						print "[*] No TestCases"
					self.debugger_pid = None
			else:
				pass


if __name__ == '__main__':
	#try:
		w = wadi()
		w.run()	
	#except:
	#	w.close()		
