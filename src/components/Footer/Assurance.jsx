import Flex from "../common/Flex";
import joinClasses from "../../utils/joinClasses";
import ASSURANCES from "../../data/assurances";

function Assurance() {
    return (
        <Flex component="section" justifyContent="space-around">
            {ASSURANCES.map(({ image, name, description }) => (
                <div
                    key={name}
                    className={joinClasses([
                        "text-align-center",
                        "padding-y-2",
                        "padding-x-1",
                        "border-1",
                        "border-solid",
                        "border-grey",
                        "width-80",
                    ])}
                >
                    <img className="width-40" src={image} alt={name} />
                    <h3 className={joinClasses(["bold", "margin-1"])}>
                        {name}
                    </h3>
                    <p>{description}</p>
                </div>
            ))}
        </Flex>
    );
}

export default Assurance;
