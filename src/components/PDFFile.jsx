import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    title: {
        fontSize:18,
        fontWeight: 600,
        color: "#b91c1c",
        marginTop: 15,
    },
    text: {
        fontSize: 14,
        marginTop:5,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>
                    Blog Page
                </Text>
                <Text style={styles.title}>
                What is the differences between uncontrolled and controlled components?                </Text>
                <Text style={styles.text}>
                Controlled functional components are those whose state and behavior are controlled by the parent component and Uncontrolled components manage their own state internally.
                </Text>

                <Text style={styles.title}>
                How to validate React props using PropTypes?                </Text>
                <Text style={styles.text}>
                PropTypes is a build feature in React that allows the developers to define the types of props passed to a React component.
                </Text>


                <Text style={styles.title}>
               What is the difference between nodejs and express js?               </Text>
                <Text style={styles.text}>
                Node.js is a free, cross-platform runtime environment and library for running web applications outside the client's browser. On the other hand, Express.js is one of the best web application frameworks for Node.js.
                </Text>


                <Text style={styles.title}>
               What is a custom hook, and we create a custom hook?             </Text>
                <Text style={styles.text}>
                In React, a custom hook is a JavaScript function that starts with the word ' use ' and it allows us to extract common stateful logic from a component so that it can be reused across multiple components.
                </Text>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default PDFFile;