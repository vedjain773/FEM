import Nav from "../../ui/nav";
import Info from "../../ui/info";
import codes from "../../../../public/codes.json";
import BacktoHome from "../../ui/BacktoHome";

export default function MoreInfo({params}) {
    const { code } = params;
    return (
        <div>
            <Nav />
            <BacktoHome />
            <Info code={code}/>
        </div>
    );
}

export async function generateStaticParams() {
    return codes.map((country) => ({
        code: country.code
    }))
}