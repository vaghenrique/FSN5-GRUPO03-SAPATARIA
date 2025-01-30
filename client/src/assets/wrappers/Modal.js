import styled from "styled-components";

export const Wrapper = styled.div`

.modal-window{
    height: 100vh;
    width: 100vw;
    position: relative;
    top: 0;
    left: 0;
    background-color:rgba(0, 0, 0, 0.5);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal{
    width: 60%;
    min-width: 400px;
    min-height: 400px;
    background-color: rgb(129, 179, 253);
    padding: 50px;
    border-radius: 20px;
}

.close-button{
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: #0D6EFD;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
}

.modal-window.open{
    display: flex;
}

@keyframes fade-in{
    from{
        opacity: 0;
        transform: translate3d(0, -20px, -5px);
    }
    to{
        opacity: 1;
        transform: translate3d(0,0,0);
    }
}

.open .modal{
    animation: fade-in 0.5s;
}
`