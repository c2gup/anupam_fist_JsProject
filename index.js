const Choice = document.getElementById("Choice");
const body = document.body;

const changeBg = () =>{
    switch (Choice.value) {
        case "Red":
            body.style.background ="red";
                break;

                case "Red":
                    body.style.background ="red";
                        break;

                        case "Green":
                            body.style.background ="Green";
                                break;

                                case "Yellow":
                                    body.style.background ="Yellow";
                                        break;

                                        case "Gray":
                                            body.style.background ="Gray";
                                                break;

                                                case "Blue":
                                                    body.style.background ="Blue";
                                                        break;

                                                        case "Pink":
                                                            body.style.background ="Pink";
                                                                break;
    
        default:
            break;
    }
}