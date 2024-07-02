// import { theme } from "antd";
import "./index.scss";

// const { useToken } = theme;

export default function AppFooter() {
    // const { token } = useToken();

    return (
        <footer
            className="single-column-layout__app-footer"
            style={{ backgroundColor: "#aed6dc", color: "#4a536b", fontWeight: "bold" }}
        >
            <span>© Crowdfunding | Team 3</span>
        </footer>
    );
}
