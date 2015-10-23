import PyV8
import sys
from cStringIO import StringIO
from multiprocessing import Process,Manager
import time
from twisted.web.resource import Resource
from twisted.web import server
from twisted.internet import reactor
from twisted.python.util import println

PORT=8000



class MyHandler(Resource):
    isLeaf = True
    def __init__(self,q):
		self.queue = q
    def render_GET(self,request):
    	#print request.path
    	if request.path == "/wait":    		
		    return "<html><head><meta http-equiv='refresh' content='5;url=/' /></head><body><h1>Waiting ...</h1></body></html>"					
		    #return server.NOT_DONE_YET		
    	else:	
			testCase = ctx.eval("generateTestCase()")
			self.queue.append(testCase)
			#return server.NOT_DONE_YET
			return testCase
    	


class Global(PyV8.JSClass):
    def string(self,num):
        return '%n'*num

ctx = PyV8.JSContext(Global())

class Harness():

	def __init__(self,f,p,t):
		self.f = f
		self.PORT=p
		self.tcases = t

	def run_server(self):
		self.Handler = server.Site(MyHandler(self.tcases))
		#try:
		reactor.listenTCP(int(self.PORT),self.Handler)
		print "Serving at port", self.PORT
		reactor.run()
		#except:
			#sys.exit()

	def get_testCase(self):
		return self.ctx.eval("generateTestCase()")


	def test(self):
		time.sleep(2)
		print 'Test'

	def run(self):
		ctx.enter()
		ctx.eval(open('randoms.js').read())
		ctx.eval(open(self.f).read())
		self.run_server()

if __name__ == '__main__':
	h = Harness(sys.argv[1],sys.argv[2],Manager().list())
	h.run()
