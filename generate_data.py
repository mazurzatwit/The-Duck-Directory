import csv
import random
from datetime import datetime, timedelta
import json
import string

# Generate data for 50 characters
NUM_ROWS = 1000

# Create the CSV file
OUTPUT_FILE = "ducks.csv"

# Load fake names from .csv files
names_list = []
for i in range(5):
    with open(f'./fake_names/names{i}.csv') as f:
        reader = csv.reader(f)
        data = list(reader)
        for name in data[1:]:
            names_list.append(name)
# print(names_list[:20])
# print(type(names_list[0]))
# print(f"size of list: {len(names_list)}")

# Generate data rows
data_rows = [
    [
        1,
        "Bob",
        "Duck",
        "203-555-5525",
        "manager",
        "Hartford",
        1000000,
        [2,3], #direct reports
        [], #manager
        "bob.duck", #username
        "abc123" #password
    ],
    [
        2,
        "Paddles",
        "Flippers",
        "203-535-5525",
        "manager",
        "St. Paul",
        800000,
        [4], #direct reports
        [1], #manager
        "paddles.flippers", #username
        "abc124" #password
    ],
    [
       3,
        "Swims",
        "McGee",
        "860-535-5525",
        "HR",
        "Hartford",
        800000,
        [5], #direct reports
        [1], #manager
        "swims.mcgee", #username
        "abc125" #password
    ],
    [
        4,
        "Michael",
        "Phelps",
        "835-535-6525",
        "employee",
        "Hartford",
        100000,
        [], #direct reports
        [2], #manager
        "michael.phelps", #username
        "abc126" #password
    ],
    [
        5,
        "Donald",
        "Duck",
        "234-535-5525",
        "employee",
        "St. Paul",
        100000,
        [], #direct reports
        [3], #manager
        "donald.duck", #username
        "abc127" #password
    ]
]

for i in range(6, NUM_ROWS + 1):
    # Generate random values for each column
    employee_id = i
    first_name = names_list[i - 6][0]
    # print(f"successfully created employee #{i}")
    last_name = names_list[i - 6][1]
    phone_number = str(random.randint(100, 900)) + "-" + str(random.randint(100, 900)) + "-" + str(random.randint(1000, 9990))
    if (i < 15):
        job_role = "HR"
        salary = random.randint(75000, 90000)
    elif (i >= 15 and i < 200):
        job_role = "manager"
        salary = random.randint(100000, 300000)
    else:
        job_role = "employee"
        salary = random.randint(40000, 100000)
    work_location = random.choice(
        ["Hartford", "St. Paul", "New York", "Kansas City", "Atlanta"]
    )
    # create list of employee_ids who are direct reports
    direct_reports = []

    # create list of employee_ids who are manager of this employee
    # note this list should only ever contain one value, the immedcate manager of the employee
    manager = []

    username = f"{first_name.lower()}.{last_name.lower()}"
    password = str(employee_id) + str(random.randint(100, 990)) + str(random.choice(string.ascii_lowercase)) + str(random.choice(string.ascii_lowercase)) + str(random.choice(string.ascii_lowercase))

    # Create the data row
    data_row = [
        employee_id,
        first_name,
        last_name,
        phone_number,
        job_role,
        work_location,
        salary,
        direct_reports,
        manager,
        username,
        password
    ]

    # Add the data row to the list
    data_rows.append(data_row)

# populate managers and direct reports
employee_idxs = list(range(199, 1000))
# print(employee_idxs)

# assign manager 15 to all HR people
for i in range(5, 14):
    # all HR people have employee 15 as manager 
    # employee 15 is first manager created outside the first five
    data_rows[i][8].append(15)
    # add HR employee to list of direct reports for employee 15
    data_rows[14][7].append(i + 1)

# fix swims mcgee
data_rows[14][7].append(3)
data_rows[2][8].append(15)

# assign managers for all non-HR employees
for i in range(15, 200):
    for j in range(4):
        # update manager's list of direct reports
        subordinate_id = employee_idxs.pop()
        data_rows[i][7].append(data_rows[subordinate_id][0])
        # update employee's manager
        data_rows[subordinate_id][8].append(i + 1)

print(data_rows[0:220])

# Write the data to the CSV file
with open(OUTPUT_FILE, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["employee_id", "first_name", "last_name", "phone", "job_role", "work_location", "salary",
         "direct_reports", "manager", "username", "password"]
    )
    writer.writerows(data_rows)

print("Data generation complete.")