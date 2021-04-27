import axios from 'axios';

async function start() {
    const urls = ['https://releases.ubuntu.com/20.04.2.0/ubuntu-20.04.2.0-desktop-amd64.iso?_ga=2.75943062.262255550.1619531518-988591408.1619531518',
        'https://cdimage.debian.org/debian-cd/current/arm64/iso-cd/debian-10.9.0-arm64-xfce-CD-1.iso',
        'http://ftp.tu-chemnitz.de/pub/linux/centos/8.3.2011/isos/x86_64/CentOS-8.3.2011-x86_64-dvd1.iso',
        'http://ftp.tu-chemnitz.de/pub/linux/centos/8.3.2011/isos/x86_64/CentOS-8.3.2011-x86_64-minimal.iso',
        'http://ftp.antilo.de/pub/linux/centos/8.3.2011/isos/x86_64/CentOS-8.3.2011-x86_64-minimal.iso',
        'http://centos.intergenia.de/8.3.2011/isos/x86_64/CentOS-8.3.2011-x86_64-minimal.iso'];
    const promises = urls.map((url) => axios.get(url, {
        maxContentLength: 4000000000, // ca. 3.7GB
    }));
    await Promise.all(promises);
    console.log('finish');
}
start();

