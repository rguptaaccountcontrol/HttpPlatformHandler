# HttpPlatformHandler
Setup HTTPPLATFORMHANDLER feature in IIS

1.	See the diagram below. The features listed there should be on.
 
![Alt text](img/img1.jpg?raw=true "Title")








2.	Place the <b>web.config file at the location of the nodejs pgm</b>. See below.
<br> #	app.js is the nodejs pgm. In the same folder as the app is the web.config file.
 
 ![Alt text](img/img2.jpg?raw=true "Title")

See the web.config file below. <b>The processPath and the argument should be exactly as shown</b>. The <b>path for app.js is relative as shown by “.\”</b>. <b><I>I tried putting the full path, and it did not work.</I></b>

<pre>
<code>
&lt?xml version="1.0" encoding="UTF-8"?&gt
&ltconfiguration&gt
    &ltsystem.webServer&gt
        &lthandlers&gt
            &ltadd name="httpplatformhandler" path="*" verb="*" modules="httpPlatformHandler" resourceType="Unspecified" requireAccess="Script" /&gt
        &lt/handlers&gt
        &lthttpPlatform stdoutLogEnabled="true" stdoutLogFile=".\node.log" startupTimeLimit="20" processPath="node.exe" arguments=".\app.js"&gt
            &ltenvironmentVariables&gt
                &ltenvironmentVariable name="PORT" value="%HTTP_PLATFORM_PORT%" /&gt
                &ltenvironmentVariable name="NODE_ENV" value="Production" /&gt
            &lt/environmentVariables&gt            
        &lt/httpPlatform&gt
    &lt/system.webServer&gt
&lt/configuration&gt
</code>
</pre>








<b>IIS Modules needed</b>

Download the HttpPlatformHandler module in install is. Check as shown below that it is installed.
![Alt text](img/img3.jpg?raw=true "Title")
 

Download the “URL Rewrite” module and install it. Check as shown below that it is installed.
 ![Alt text](img/img4.jpg?raw=true "Title")




<b>IIS Setup</b>

See the basic settings below. It is like setting up any web application in the Default Web Site. That is setup up right clicking on the Default Web Site and in the ensuing dialog box click Add Application. With that action a dialog box will appear as shown below. In that box add the values as shown.
![Alt text](img/img5.jpg?raw=true "Title")
 



That is the setup. After that to <b>test</b> go to the browser and type the URL, in this case https://localhost/Firstpgm or http://localhost/Firstpgm. Use https or http based on how the IIS is setup.

![Alt text](img/img6.jpg?raw=true "Title")
<hr>	
<b>To see the NodeJs pgm called app.js open it in  firstPgm folder.</b>
<hr>
<b> Download HttpPlatformHandler </b><br>
https://www.iis.net/downloads/microsoft/httpplatformhandler<br>
<hr>
<b>Helpful web sites</b><br>
https://code.visualstudio.com/docs/nodejs/nodejs-debugging <br>
https://docs.npmjs.com/getting-started <br>
https://nodejs.org/en/docs/guides/debugging-getting-started/ <br>
https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/ <br>
https://nodejs.dev/learn/making-http-requests-with-nodejs <br>
https://dev.to/petereysermans/using-http-platform-handler-to-host-a-node-js-application-via-iis-4pgd <br>
<hr>
<b>Using IIS Reverse Proxy for nodejs. We do not use reverse-proxy with HttpPlatformHandler</b><br>
https://eysermans.com/post/hosting-a-nodejs-application-on-windows-with-iis-as-reverse-proxy <br>
To download URL rewrite: https://www.iis.net/downloads/microsoft/url-rewrite <br>

<hr>
<h2> Routing</h2>
<b>Routing HTTP</b><br>
<p>Look at code in <b>RoutingHTTP folder</b></p>
https://www.codexpedia.com/node-js/node-js-http-url-routing-using-url-pathname/ <br>
<b>Routing Express</b><br>
<p>Look at code in <b>RoutingExpress folder</b></p>
https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm <br>
https://learncybers.com/express-router-easy-static-dynamic-routing/ <br>
https://learncybers.com/express-middleware-in-node-express-js/ >br>

