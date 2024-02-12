from flask import Flask
import pickle
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict/<work_location>/<job_role>')
def getPrediction(work_location, job_role):
    pickle_path = 'trained_model.pkl'
    regr_unpickle = open(pickle_path, 'rb')
    regr_model = pickle.load(regr_unpickle)
    new_df = pd.DataFrame([[False, False, False, False, False, False, False, False]], columns=regr_model.feature_names_in_)
    # print(regr_model.feature_names_in_)
    if (job_role == "HR"):
        new_df.at[0, 'job_role_HR'] = True
    if (job_role == "employee"):
        new_df.at[0, 'job_role_employee'] = True
    if (job_role == "manager"):
        new_df.at[0, 'job_role_manager'] = True
    if (work_location =="Hartford"):
        new_df.at[0, 'work_location_Hartford'] = True
    if (work_location =="St. Paul"):
        new_df.at[0, 'work_location_St. Paul'] = True
    if (work_location =="New York"):
        new_df.at[0, 'work_location_New York'] = True
    if (work_location =="Kansas City"):
        new_df.at[0, 'work_location_Kansas City'] = True
    if (work_location =="Atlanta"):
        new_df.at[0, 'work_location_Atlanta'] = True
    # print(new_df)
    results = regr_model.predict(new_df)
    
    return {'results': round(results[0])}