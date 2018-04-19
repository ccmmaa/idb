.PHONY: backend frontend

# make github   - prints link to github repo
github:
	@echo "https://github.com/ccmmaa/idb"

# make issues   - prints link to current phase's issues
issues:
	@echo "https://github.com/ccmmaa/idb/issues"

# make stories  - prints link to current phase's stories
stories:
	@echo "https://github.com/ccmmaa/idb/projects"

# make uml      - prints link to uml diagram
uml:
	@echo "https://requiemforourdreams.gitbook.io/report/database#uml-diagram"

# make selenium - runs selenium tests
selenium:
	@pip3 install selenium
	python3 frontend/guitests.py

# make frontend - runs frontend tests
frontend:
	@(cd frontend; npm install; npm test)

# make backend  - runs backend tests
backend:
	@pip3 install pymusixmatch
	@pip3 install spotipy
	python3 backend/tests.py

# make website  - prints link to a website
website:
	@echo "http://musepy.me"

# make report   - prints link to technical report
report:
	@echo "https://requiemforourdreams.gitbook.io/report/"

# make apidoc   - prints link to api documentation
apidoc:
	@echo "https://requiemforourdreams.gitbook.io/api/"

# make self     - prints link to self critique
self:
	@echo "https://requiemforourdreams.gitbook.io/report/self-critique"

# make other    - prints link to other critique
other:
	@echo "https://requiemforourdreams.gitbook.io/report/game-frame-critique"
