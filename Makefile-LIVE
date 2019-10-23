.PHONY: checkout_to_release deploy_to_release

# When run in gocd it will be injected by environment variable
AWS_ACCOUNT?=unknown

# Github variables
GITHUB_API=https://api.github.com
ORG=ukparliament
REPO=uk.parliament-visual
LATEST_REL=$(GITHUB_API)/repos/$(ORG)/$(REPO)/releases/latest
REL_TAG=$(shell curl -s $(LATEST_REL) | jq -r '.tag_name')


checkout_to_release:
	git checkout -b release $(REL_TAG)

deploy_to_release:
	aws s3 sync \
		--exclude ".git/*" \
		--exclude "gocd/*" \
		--exclude "Makefile" \
		--exclude "README.md" \
		--acl=public-read --delete . s3://visual.parliament.uk
