import React from "react";
import ReactDOM from "react-dom";

import { App as WithReduxApp } from "./WithRedux";
import { App as Without } from "./Without";
import { App as WithContext } from "./WithContext";

import { Layout } from "./styles";

const app = (
    <Layout>
        <WithReduxApp />
        <WithContext />
        <Without />
    </Layout>
);

ReactDOM.render(app, document.getElementById("root"));
