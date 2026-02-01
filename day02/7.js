function collectUserInfo() {
    let name;
    do {
        name = prompt("Enter your Name (Characters only):");
    } while (!/^[a-zA-Z\s]+$/.test(name));

    let phone;
    do {
        phone = prompt("Enter your Phone Number (7  digits):");
    } while (!/^\d{7}$/.test(phone));
    //3511375

    let mobile;
    do {
        mobile = prompt("Enter your Mobile Number (11 digits, starts with 010|011|012):");
    } while (!/^(010|011|012)\d{8}$/.test(mobile));

    let email;
    do {
        email = prompt("Enter your Email (e.g., abc@123.com):");
    } while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

    console.log("%c Welcome to our system!", "color: blue; font-size: 16px; font-weight: bold;");
    console.log("----------------------------");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Mobile: ${mobile}`);
    console.log(`Email: ${email}`);
}

collectUserInfo();