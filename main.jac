import {*} with 

walker init {
    last_conv_state = {"key1":"value1", "key2":"value2"}
    auth_user_password = {"key1":"value1", "key2":"value2"};

    root {
        spawn here --> graph::faq_state;
    }

    report auth_user_password.dict::items;
    report last_conv_state.dict::items;
}