import styled from 'styled-components'

export const Wrapper = styled.div`

.paragrafo_home{
    font-family: "Varela Round", serif;
    font-size: 40px;
    font-weight: 600;
    text-align: left;
    margin-top: 50px;
    margin-left: 80px;
}

.botao-container{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

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