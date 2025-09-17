# Cognitive Skills & Student Performance Dashboard

### Created by: G.Dhanush Kumar Reddy

This project is a full-stack data analysis and visualization application created for an assessment by **igebra.ai**. It analyzes a synthetic student dataset to uncover insights into the relationship between cognitive skills and academic performance, culminating in an interactive dashboard built with Next.js.

##  Live Demo

**[View the live deployed dashboard here!](https://YOUR_VERCEL_LINK_HERE.vercel.app)**

*(Suggestion: After deploying, take a great screenshot of your dashboard, name it `dashboard_screenshot.png`, place it in the root folder, and the image below will appear.)*

![Dashboard Screenshot](./dashboard_screenshot.png)

---

## 🔑 Key Features

* **Data Analysis:** Correlation analysis and student persona clustering using Python, Pandas, and Scikit-learn.
* **Predictive Modeling:** A simple Linear Regression model to predict student assessment scores based on cognitive metrics.
* **Interactive Dashboard:** A responsive front-end built with Next.js and Tailwind CSS.
* **Rich Visualizations:** Bar, scatter, and radar charts powered by Recharts to visualize data from multiple perspectives.
* **Dynamic Table:** A searchable and sortable table to explore individual student data.

---

## 🔬 Key Findings & Insights

The analysis of the synthetic dataset yielded several key insights:

1.  **Strongest Correlation with Performance:**
    * **Comprehension** and **Retention** were found to be the most influential cognitive skills positively correlated with higher `assessment_score`. This suggests that educational strategies should prioritize strengthening these two areas to improve student outcomes.

2.  **Predictive Model Performance:**
    * A Linear Regression model was trained to predict assessment scores. It achieved an **R-squared ($R^2$) score of [Enter Your R² Score Here, e.g., 0.89]** on the test data, indicating that the selected cognitive and engagement metrics are strong predictors of student performance.

3.  **Student Personas Identified:**
    * Using K-Means clustering, the student population was segmented into three distinct learning personas:
        * **High Achievers:** A group characterized by high cognitive skills across the board and excellent assessment scores.
        * **Average Students:** The largest group, with moderate skills and performance, representing the typical student profile.
        * **Needs Attention:** This group exhibits lower levels of comprehension and attention, corresponding with lower assessment scores, and would benefit from targeted intervention.

---

## 🛠️ Tech Stack

* **Analysis & Machine Learning:**
    * Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook
* **Dashboard & Front-End:**
    * Next.js, React, Tailwind CSS, Recharts
* **Deployment:**
    * Vercel

---

## ⚙️ Local Setup and Installation

To run this project on your local machine, please follow these steps:

### Prerequisites
* Node.js (v18 or later)
* npm or yarn
* Python (v3.8 or later)
* A virtual environment tool like `conda` or `venv`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_URL]
    cd igebra-assessment
    ```

2.  **Run the Analysis Notebook:**
    * This step generates the `student_data_processed.csv` file needed for the dashboard.
    ```bash
    # Navigate to the analysis folder
    cd analysis

    # Install Python dependencies
    pip install pandas numpy scikit-learn matplotlib seaborn notebook

    # Start Jupyter and run the notebook
    jupyter notebook student_assessment.ipynb
    ```
    * After running all the cells, a file named `student_data_processed.csv` will be created in this folder.

3.  **Set up the Dashboard:**
    * **Copy the data file:** Move the `student_data_processed.csv` file from the `analysis` folder to the `dashboard/public/` folder.
    * Navigate to the dashboard directory and install dependencies:
    ```bash
    # Go to the dashboard folder from the root directory
    cd ../dashboard

    # Install npm packages
    npm install
    ```

4.  **Run the Dashboard:**
    ```bash
    npm run dev
    ```
    * Open your browser and navigate to `http://localhost:3000` to see the application running.

---

## 📂 Project Structure

```
igebra-assessment/
├── analysis/
│   ├── student_assessment.ipynb         # Data generation, analysis, and ML model
│   └── student_data_processed.csv       # Output data file
│
└── dashboard/
    ├── app/                             # Next.js App Router
    │   ├── components/                  # React components
    │   └── page.js                      # Main dashboard page
    ├── lib/
    │   └── data.js                      # Data loading logic
    ├── public/                          # Static assets
    └── package.json                     # Project dependencies
```