# HttpPlatformHandler
Setup HTTPPLATFORMHANDLER feature in IIS

1.	See the diagram below. The features listed there should be on.
 









2.	Place the web.config file at the location of the nodejs pgm. See below.
a.	app.js is the nodejs pgm. In that is the web.config file.
 

See the web.config file below. The processPath and the argument should be exactly as shown. The path for app.js is relative as shown by “.\”. I tried putting the full path, and it did not work.

<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <handlers>
            <add name="httpplatformhandler" path="*" verb="*" modules="httpPlatformHandler" resourceType="Unspecified" requireAccess="Script" />
        </handlers>
        <httpPlatform stdoutLogEnabled="true" stdoutLogFile=".\node.log" startupTimeLimit="20" processPath="node.exe" arguments=".\app.js">
            <environmentVariables>
                <environmentVariable name="PORT" value="%HTTP_PLATFORM_PORT%" />
                <environmentVariable name="NODE_ENV" value="Production" />
            </environmentVariables>            
        </httpPlatform>
    </system.webServer>
</configuration>









IIS Modules needed

Download the HttpPlatformHandler module in install is. Check as shown below that it is installed.

 

Download the “URL Rewrite” module and install it. Check as shown below that it is installed.
 




IIS Setup

See the basic settings below. It is like setting up any web application in the Default Web Site. That is setup up right clicking on the Default Web Site and in the ensuing dialog box click Add Application. With that action a dialog box will appear as shown below. In that box add the values as shown.

 



That is the setup. After that to test go to the browser and type the URL, in this case https://localhost/Firstpgm or http://localhost/Firstpgm. Use https or http based on how the IIS is setup.


 	
To see the NodeJs pgm called app.js open it in  firstPgm folder.

