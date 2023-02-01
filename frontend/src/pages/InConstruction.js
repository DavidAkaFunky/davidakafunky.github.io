import Stack from "@mui/material/Stack";

const InConstruction = () => {
    return (
        <Stack className="PageRow">
            <Stack item>
                Under construction!
            </Stack>
            <Stack item margin="auto">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2018%2F04%2Fpage-under-construction-gif-14.gif&f=1&nofb=1&ipt=0629cccf19099ac432b1878952415d8c42958c42324af5202dadacd750b12b2f&ipo=images" ></img>
            </Stack>
        </Stack>
    );
};

export default InConstruction;