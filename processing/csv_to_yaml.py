import csv
import yaml 

from pathlib import Path


def read_csv(filepath, callback=None, eager_loading=False):
    data = None
    filepath = Path(filepath)
    if filepath.exists():
        with filepath.open("r", encoding="utf-8") as file:
            reader = csv.reader(file)

            if not callback is None:
                callback(reader)
            
            if eager_loading:
                data = list(reader)

    return data

def write_yaml(filepath, data, overwrite=False):
    is_successful = False
    filepath = Path(filepath)
    if not filepath.exists() or (filepath.exists() and overwrite):
        print("Opening file in write mode", filepath.absolute().resolve())
        with filepath.open("w", encoding="utf-8") as file:
            yaml_data = yaml.dump(data, file, allow_unicode=True, default_flow_style=False)
        is_successful = True

    return is_successful