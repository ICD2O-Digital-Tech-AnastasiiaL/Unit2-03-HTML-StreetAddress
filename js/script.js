// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: March 2025
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("street-name").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("number-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your address name is" + firstName + " and your " + userAge + " is address number"
}