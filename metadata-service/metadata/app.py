from fastapi import FastAPI
from metadata.service import get_metadata

app = FastAPI()

@app.get("/metadata")
def read_metadata():
    return get_metadata()
