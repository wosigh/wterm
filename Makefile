APPID = us.ryanhope.wterm

.PHONY: package install clean

package:
	palm-package -X excludes.txt . package node-service
	ar q ${APPID}_*.ipk pmPostInstall.script
	ar q ${APPID}_*.ipk pmPreRemove.script

uninstall:
	- palm-install -r ${APPID}

install: uninstall package
	palm-install ${APPID}_*.ipk
	palm-launch ${APPID}

clean:
	rm -rf *.ipk
