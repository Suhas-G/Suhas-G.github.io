import csv_to_yaml

SOURCE_FILEPATH = "../customData/german/nouns.csv"
DEST_FILEPATH = "../data/german/nouns.yml"

def get_nouns(noun_list):
    nouns = []
    for noun in noun_list:
        noun_data = {"noun": {
            "name": noun[0],
            "plural": noun[1],
            "meaning": noun[2]
        }}
        nouns.append(noun_data)

    return nouns

data = csv_to_yaml.read_csv(SOURCE_FILEPATH, eager_loading=True)

headers = data[0]
data = data[1:]

yaml_data = {
    "nounHeadings": headers,
    "nouns": get_nouns(data)
}

# print(yaml_data)

if(csv_to_yaml.write_yaml(DEST_FILEPATH, yaml_data, overwrite=True)):
    print("CSV to YAML conversion successful")

