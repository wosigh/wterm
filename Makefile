APPID = us.ryanhope.wterm

.PHONY: package install clean

package:
	palm-package -X excludes.txt . package node-service
	ar q ${APPID}_*.ipk pmPostInstall.script
	ar q ${APPID}_*.ipk pmPreRemove.script

uninstall:
	- palm-install -r ${APPID}

kill:
	novacom run file://usr/bin/luna-send -- -n 1 palm://us.ryanhope.wterm.tty.service/__quit '{}'

install: kill uninstall package
	palm-install ${APPID}_*.ipk
	palm-launch ${APPID}

clean:
	rm -rf *.ipk
