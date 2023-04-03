import Box from "./Box";
import Grid from "./Grid";
import ProfileWidget from "./sidebar/widgets/ProfileWidget";

export default function UserBadge() {
    return (
        <>
            <Box>
                <Grid>
                    <ProfileWidget/>
                    <h2>Rei</h2>
                </Grid>
            </Box>
        </>
    );
}