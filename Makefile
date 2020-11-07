IGNORES := vim,intellij+all,linux,macos

################################################################################
# Download .gitignore
# $ make gitignore
################################################################################
.PHONY: gitignore
gitignore:
	( ls .gitignore ) \
	|| curl --output .gitignore https://www.toptal.com/developers/gitignore/api/$(IGNORES)

################################################################################
# Ignore ytt command
# $ make ignore-ytt-for-git
################################################################################
.PHONY: ignore-ytt-for-git
ignore-ytt-for-git:
	grep ytt .gitignore || echo ytt >> .gitignore

################################################################################
# Setup git repository
# $ make setup-git
################################################################################
.PHONY: setup-git
setup-git: gitignore ignore-ytt-for-git

################################################################################
# git push origin master
# $ make push
################################################################################
.PHONY: push
push:
	git push origin master

