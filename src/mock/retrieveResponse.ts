export const retrieveResponse = {
   data: `<?xml version="1.0" encoding="utf-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:metadata="http://xmlns.solar.com/2010/atom-metadata">
<id>http://host-ip-address/webservice/solar/content/43</id>
<title type="text">Test</title>
<app:edited>2010-06-23T09:09:50.654Z</app:edited>
<dcterms:created>2010-06-22T10:22:20.000Z</dcterms:created>
<author>
   <name>demo Administrator</name>
   <uri>http://host-ip-address/webservice/solar/person/2</uri>
</author>
<dcterms:identifier>4</dcterms:identifier>
<metadata:reference source="ece-auto-gen" sourceid="6d7203c9-27d5-4fce-b14a-a466ead83875" />
<link rel="http://www.vizrt.com/types/relation/home-section" href="http://host-ip-address/webservice/solar/section/4" title="New Articles" type="application/atom+xml; type=entry" />
<link href="http://wrk-ermo:12345/publication-id/incoming/article4.ece" rel="alternate" />
<link href="http://host-ip-address/webservice/solar/lock/article/43" rel="http://www.vizrt.com/types/relation/lock" />
<link rel="http://www.vizrt.com/types/relation/publication" href="http://host-ip-address/webservice/solar/publication/demo" title="demo" type="application/atom+xml; type=entry" />
<metadata:creator>
   <name>demo Administrator</name>
</metadata:creator>
<metadata:publication href="http://host-ip-address/webservice/solar/publication/demo">
   <link rel="http://www.vizrt.com/types/relation/home-section" href="http://host-ip-address/webservice/solar/section/4" title="New Articles" type="application/atom+xml; type=entry" />
   <link rel="http://www.vizrt.com/types/relation/section" href="http://host-ip-address/webservice/solar/section/4" title="New Articles" type="application/atom+xml; type=entry" />
</metadata:publication>
<link href="http://host-ip-address/webservice/solar/content/43" rel="edit" />
<link href="http://host-ip-address/webservice/solar/content/43" rel="self" />
<content type="application/vnd.vizrt.payload+xml">
   <vdf:payload xmlns:vdf="http://www.vizrt.com/types" model="http://host-ip-address/webservice/solar/model/another">
      <vdf:field name="TITLE">
         <vdf:value>Test</vdf:value>
      </vdf:field>
      <vdf:field name="BODY">
         <vdf:value>
            <div xmlns="http://www.w3.org/1999/xhtml">
               <p>This is a test</p>
            </div>
         </vdf:value>
      </vdf:field>
   </vdf:payload>
</content>
</entry>`};