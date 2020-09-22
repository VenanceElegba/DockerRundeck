loglevel.default = "INFO"
rdeck.base = "/var/lib/rundeck"
rss.enabled = "false"
grails.serverURL = "https://10.10.14.114:4443"

dataSource.dbCreate = "update"
dataSource.url = "jdbc:mysql://mysql/rundeck?autoReconnect=true"
dataSource.username = "rundeck"
dataSource.password = "641949548825f1f8c51d5f547ab88faa"
dataSource.driverClassName = "com.mysql.jdbc.Driver"

//rundeck.projectsStorageType= "db"

//dataSource.url = "jdbc:h2:file:/var/lib/rundeck/data/rundeck;MVCC=true;TRACE_LEVEL_FILE=4"

//please see the following link for more information
//http://www.grails.org/plugin/mail#Configuration
grails {
   mail {
     host = "smtp.com"
     port = 587
     username = "noreply@test.com"
     password = "password"
     props = ["mail.smtp.starttls.enable":"true", 
                  "mail.smtp.port":"587"]
   }
}
grails.mail.default.from="noreply@test.com"

