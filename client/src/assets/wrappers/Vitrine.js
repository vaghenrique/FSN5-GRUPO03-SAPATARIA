import styled from "styled-components";

export const Wrapper = styled.div`

.container-card{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    row-gap: 50px;
    column-gap: 0px;
    padding: 30px;
}


@media screen and (max-width: 1210px) {

    .container-card{
        grid-template-columns: 1fr 1fr;
    }

}

@media screen and (max-width: 860px) {

    .container-card{
        grid-template-columns: 1fr;
    }

}
`
