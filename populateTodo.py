import requests
import json



url = "https://crud-example.clabhi8.workers.dev/api/items/"
res = requests.get(url)
x = json.loads(res.text)

for i in x:
    itemId = i['id']
    print(url+(str)(itemId))
    requests.delete(url+(str)(itemId))

item = {"todoTitle": "", "todoDescription": ""}

dataList = [["Angular CRUD Operations Demo", "Create Read Update Delete Notes"],
            ["Create Note", "Click the create button to create the note"],
            ["Read Notes", "Click the title 'Notelifyy' to view the list of the notes"],
            ["Update Notes", "Click on any note to update its content"],
            ["Delete Note", "Click on the 'X' symbol to delete that note from the list"]]


for data in dataList:
    print(data[0], data[1])
    item["todoTitle"] = data[0]
    item["todoDescription"] = data[1]
    res = requests.post(url, json=item)
    print(res.text)

print("Done")