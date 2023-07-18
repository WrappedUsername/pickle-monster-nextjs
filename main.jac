import {*} with 

global auth_user_conv = {{conv_state}};
global auth_user_password = {{saved_password}};

walker init {
    last_conv_state = global.auth_user_conv;
    last_saved_password = global.auth_user_password;

    std.out(last_conv_state);
    std.out(last_saved_password);

    root {
        spawn here --> graph::faq_state;
    }
}