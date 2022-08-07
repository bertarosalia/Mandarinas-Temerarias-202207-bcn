import styled from "styled-components";

const AnimeCardStyled = styled.article`
  .not-detailed {
    box-sizing: border-box;
    width: 100%;
    height: 170px;
    min-width: 300px;
    border-radius: 20px;
    box-shadow: 0 0 10px grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    object-fit: cover;
    overflow: hidden;

    @media (min-width: 450px) {
      width: 400px;
    }

    .animeCard_image-frame {
      height: 100%;
      width: fit-content;
      img {
        height: auto;
        width: 120px;
      }
    }
    h3 {
      width: calc(100% - 140px);
      margin: 10px 0;
      padding: 0 10px;
    }
    .animeCard_footer {
      width: calc(100% - 140px);
      margin: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .info {
        text-align: left;
        color: grey;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .detailed {
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 0 10px grey;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      order: 1;
    }
    .animeCard_image-frame {
      order: 2;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      img {
        width: auto;
        height: auto;
        border-radius: 20px;
      }
    }
    .animeCard_footer {
      margin: 10px 0;
      height: 100px;
      width: 100%;
      order: 3;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
    }
    .info {
      width: 30%;
      display: flex;
      flex-direction: column;
    }
    .animeCard_footer_score_button {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
    .animeCard_footer_score {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      justify-content: center;
      align-items: baseline;
      font-weight: 700;
      font-size: 20px;
    }
    .animeCard_synapsis {
      order: 4;
    }
  }
`;

export default AnimeCardStyled;
