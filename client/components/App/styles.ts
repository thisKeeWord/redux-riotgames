import styled from 'styled-components';

export const StyledApp = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #4c4c4c;

  .container {
    margin: 0 auto;
    padding-top: 50px;

    .about-link {
      max-width: 980px;
      margin: 0 auto;
    }

    &.left-display {
      max-width: 980px;

      a {
        text-align: left !important;
      }
    }
  
    a {
      padding: 10px 20px 0 20px;
      display: block;
      text-align: right;
      color: white;

      &:hover: {
        color: lightgray;
      }
    }

    .root-form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 20px 20px 20px;
      max-width: 980px;
      margin: 0 auto;

      .username-refresh {
        padding-right: 12px;
        display: flex;
        color: #fff;

        .username-level {
          display: flex;
          flex-direction: column;
          
          .username {
            font-size: 30px;
          }

          .level {
            font-size: 14px;
          }
        }

        .refresh-button {
          color: #fff;
          min-width: unset !important;
          height: auto !important;
          margin-left: 10px;

          .MuiTouchRipple-root {
            display: none;
          }

          i {
            font-size: 20px;
          }
        }
      }

      .search {
        box-shadow: 1px 1px 1px 1px darkcyan;
        box-sizing: border-box;
        border-radius: 5px;
        width: fit-content;
        background: white;
        display: flex;
        align-items: center;

        & > input {
          padding: 16px;
          border: none;
          box-sizing: border-box;
          flex: 1;

          &:focus {
            outline: none;
          }
        }

        & > button {
          height: 51px;
          width: 51px;
          padding: 0;
          border: none;
          background: white;

          &:focus {
            outline: none;
          }
        }

        p {
          margin-top: 0;
          position: absolute;
          bottom: -20;
        }

        label {
          background-color: white;
        }

        fieldset {
          border: none;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    a {
      font-size: 1rem;
    }

    input {
      font-size: 1rem;
    }
  }
`;
