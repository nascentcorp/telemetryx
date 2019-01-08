# telemetryx

CentOS host image setup 

https://docs.docker.com/install/linux/docker-ce/centos/#install-using-the-repository
https://docs.docker.com/install/linux/linux-postinstall/
yum install git


ELK Stack setup

https://logz.io/blog/docker-logging/
https://github.com/deviantony/docker-elk https://github.com/NaturalHistoryMuseum/scratchpads2/wiki/Install-Docker-and-Docker-Compose-(Centos-7)
https://github.com/docker/compose/releases


Filebeat Log Shipper

https://www.elastic.co/guide/en/beats/filebeat/6.5/running-on-docker.html

docker run -d \
  --name=filebeat \
  --user=root \
  --volume="$(pwd)/filebeat.docker.yml:/usr/share/filebeat/filebeat.yml:ro" \
  --volume="/var/lib/docker/containers:/var/lib/docker/containers:ro" \
  --volume="/var/run/docker.sock:/var/run/docker.sock:ro" \
  docker.elastic.co/beats/filebeat:6.5.4 filebeat -e -strict.perms=false \
  -E setup.kibana.host=68.183.48.114:5601 \
  -E output.elasticsearch.hosts=["68.183.48.114:9200"]  

Vehicle state From Examples

http://python.dronekit.io/examples/running_examples.html

Docker Image with Dronekit Support

https://raw.githubusercontent.com/emantas


