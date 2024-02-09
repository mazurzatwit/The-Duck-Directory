import csv
import random
from datetime import datetime, timedelta
import json

# Generate data for 50 characters
NUM_ROWS = 1000

# Create the CSV file
OUTPUT_FILE = "ducks.csv"




def choose_a_side(home_world):
    """
    Randomly choose an empire or resistance side based on the likelihood 
    that someone from that world would join the rebel alliance.
    Args:
        home_world (dict): The home world data for the character.
    Returns:
        str: The empire or resistance side.
    """
    if home_world["rebel_likelihood"] > random.random():
        return "resistance"
    else:
        return "empire"


# # Load home world data from JSON file
# with open("home_worlds.json") as json_file:
#     home_worlds = json.load(json_file)

# Generate data rows
# data_rows = []
first_five = [
    [
        1,
        "Bob",
        "Duck",
        "203-555-5525",
        "DEO",
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
        "Manager",
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
        "Employee",
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
        "Employee",
        "St. Paul",
        100000,
        [], #direct reports
        [3], #manager
        "donald.duck", #username
        "abc127" #password
    ]
]
# for i in range(1, NUM_ROWS + 1):
#     # Generate random values for each column
#     timestamp = datetime.now() - timedelta(seconds=i)
#     unit_id = i
#     unit_type = random.choice(
#         ["stormtrooper", "tie_fighter", "at-st", "x-wing",
#             "resistance_soldier", "at-at", "tie_silencer", "unknown"]
#     )
#     location_x = random.randint(1, 10)
#     location_y = random.randint(1, 10)
#     destination_x = random.randint(1, 10)
#     destination_y = random.randint(1, 10)

#    # Select a random home world from the available options
#     home_world = random.choice(home_worlds)
#     home_world_name = home_world["name"]
#     empire_or_resistance = choose_a_side(home_world)

#     # Create the data row
#     data_row = [
#         timestamp.strftime("%Y-%m-%d %H:%M:%S"),
#         unit_id,
#         unit_type,
#         empire_or_resistance,
#         location_x,
#         location_y,
#         destination_x,
#         destination_y,
#         home_world_name,
#     ]

    # Add the data row to the list
    # data_rows.append(data_row)

# Write the data to the CSV file
with open(OUTPUT_FILE, "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(
        ["employee_id", "first_name", "last_name", "phone", "job_role", "work_location", "salary",
         "direct_reports", "manager"]
    )
    writer.writerows(first_five)

print("Data generation complete.")