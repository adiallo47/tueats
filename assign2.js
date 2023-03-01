    //GOOD FUNCTION -- USERNAME SHORT OR TOO LONG --
  function Verification(){
    var a = document.forms["form"]["username"].value;
    if (a.length== ""){
      alert("Fill in name");
      return false;
    }
    else if(a.length > 24){
      alert("Too many characters")
      return false;
    }
    else if (a.length < 6){
      alert("Not enough characters")
      return false
    }
    else{
      return true;
    }
  }

    //GOOD FUNCTION -- PASSWORD VERIFICATION --
  function PasswordVerification(){
        var p1 = document.forms["form"]["password"].value;
        var p2 = document.forms["form"]["vpassword"].value;

        if (p1 != p2)
        {
            alert("Please ensure the passwords match!")
          return false;

        }
        else{
            return true;
        }
  }
    
    //GOOD FUNCTION -- REFERRAL CODE --
  function ReferralFunction(){
       x = document.forms["form"]["referral"].value;
    if (x == "tucis" || x == "bogo" || x== "eatsgood"){
      alert("invalid Referral Code");
      return false;
    }
    else if (x == ""){
      alert("Enter a Referral Code")
    }
    
    else{
      x = x + "(free meal)";
      return true;
    }
  }

  // function checkBox() {
  //   var c = document.getElementById("checkbox").checked;
  //   document.getElementById("checkbox").innerHTML = "checkbox";
  // }

    // GOOD FUNCTION -- PASSWORD & USER VALIDATION --
  function Validation(){
  if (PasswordVerification() && ReferralFunction() && Verification()){
    return true;
  }
  else {
    return false;
  }
}


  // GOOD FUNCTION -- DISPLAY DATA --
  function getData(){
    var data = (new URL (document.location)).searchParams;
      var username = data.get("username");
      document.getElementById("username").innerHTML = username;

      var email = data.get("email");
      document.getElementById("email").innerHTML = email;

      var referral = data.get("referral");
      document.getElementById("referral").innerHTML = referral;

      var password = data.get("password");
      document.getElementById("password").innerHTML = password;

      var vpassword = data.get("vpassword");
      document.getElementById("vpassword").innerHTML = vpassword;

      var checkbox = data.get("checkbox");
      document.getElementById("checkbox").innerHTML = checkbox;

  }