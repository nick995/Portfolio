import {motion} from "framer-motion"

const ToggleButton = ({setOpen}) =>{
    return (
      <button onClick={() => setOpen((prev) => !prev)}>
        <svg widht="25" height="25" viewBox="0 0 25 25 ">
          {/* first line */}
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          ></motion.path>
          {/* third line */}
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          ></motion.path>

            <motion.path
                strokeWidth="3"
                stroke="black"
                strokeLinecap="round"
                d= "M 2 9.423 L 20 9.423"
                variants={{
                    open:{opacity: 0},
                    closed: {opacity: 1},
                }}
            >

            </motion.path>

        </svg>
      </button>
    );
}

export default ToggleButton