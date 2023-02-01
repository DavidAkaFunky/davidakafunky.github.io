import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const Home = () => {

    return (
        <Stack className="PageRow">
            <Stack item>
                Languages
            </Stack>
            <Stack item>
                <Grid margin-left="0" container justifyContent="center" spacing={2} fontSize="1.1rem">
                    <Grid item xs={5} sm={4} md={3} lg={2}>
                        <Stack>
                            <div>Fluent</div>
                            <div>
                                <Link to="https://en.wikipedia.org/wiki/Portuguese_language" target="_blank"> <img src="http://4.bp.blogspot.com/-Uw8Wv7qrIms/U3DhCB799VI/AAAAAAAAPnk/GKBdOabaoIs/s1600/Portugal+(1).gif" alt="pt" height="40" /> </Link>
                                <Link to="https://en.wikipedia.org/wiki/English_language" target="_blank"> <img src="http://3.bp.blogspot.com/-1B3tnJ1tZDA/U3HLW1UlDlI/AAAAAAAAP5c/1tAKLDtjWZQ/s1600/United_Kingdom.gif" alt="en" height="40" /> </Link>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={2}>
                        <Stack>
                            <div>OK with</div>
                            <div>
                                <Link to="https://en.wikipedia.org/wiki/Spanish_language" target="_blank"> <img src="http://4.bp.blogspot.com/-2hkhDtMKZjU/U3EBlTUXsPI/AAAAAAAAPv4/uxdT1t8idqY/s1600/Spain+(1).gif" alt="es" height="40" /> </Link>
                                <Link to="https://en.wikipedia.org/wiki/French_language" target="_blank"> <img src="http://2.bp.blogspot.com/-BSGwZRDB4TY/U2cPKceBMII/AAAAAAAAO9Y/MzzKkrda0zo/s1600/France.gif" alt="fr" height="40" /> </Link>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={2}>
                        <Stack>
                            <div>Learning</div>
                            <div>
                                <Link to="https://en.wikipedia.org/wiki/Japanese_language" target="_blank"> <img src="http://3.bp.blogspot.com/-OXCwUUqwIQ0/U28bBgo1vaI/AAAAAAAAPHI/xOOjW1jnZlQ/s1600/Japan.gif" alt="jp" height="40" /> </Link>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
};

export default Home;