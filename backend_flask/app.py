from flask import Flask, request,jsonify

import language_tool_python

app = Flask(__name__)
# Create a tool instance for English
tool = language_tool_python.LanguageTool('en-US')



# Route
@app.route("/toflask", methods=["POST"])
def check_grammer():
   data = request.get_json()
   text = data.get("userinput")

   # Check for errors
   matches = tool.check(text)

   # Apply corrections
   corrected_text = tool.correct(text)

   # Output results
   print("Original Text:", text)
   print("Corrected Text:", corrected_text)
   for match in matches:
    # print(f"Error: {match.ruleId} - {match.message}")
    print(f"Error: {match.message}") 


    return jsonify({"corrected_text": corrected_text})  


if __name__ == "__main__":
    with app.app_context():
     app.run(debug=True, port=5001)  


# GrammYogi (Yogi denotes mastery, in Hindi)      



# Remove-Item -Recurse -Force .\venv
#   pip install --user virtualenv
#  pip install flask