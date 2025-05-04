import pandas as pd
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase
cred = credentials.Certificate("unnatipharma-firebase-adminsdk-serviceKey.json")  # replace with your path
firebase_admin.initialize_app(cred)
db = firestore.client()

# Load Excel data
df = pd.read_excel("working (1).xlsx")

# Strip spaces from column names
df.columns = df.columns.str.strip()

# Strip spaces from values
df["PRODUCT NAME"] = df["PRODUCT NAME"].astype(str).str.strip()
df["MANUFACTURE"] = df["MANUFACTURE"].astype(str).str.strip()

# Replace 'nan' strings with actual NaN for proper grouping
df["MANUFACTURE"].replace("nan", pd.NA, inplace=True)

# Group manufacturers by product name
grouped = df.groupby("PRODUCT NAME")["MANUFACTURE"].apply(
    lambda x: [m for m in x.dropna()]
).reset_index()

# Upload to Firebase
for _, row in grouped.iterrows():
    doc = {
        "product_name": row["PRODUCT NAME"],
        "manufacturers": row["MANUFACTURE"]  # This is a list, possibly empty
    }
    db.collection("products").add(doc)

print("✅ Upload completed: grouped products uploaded to Firestore.")
