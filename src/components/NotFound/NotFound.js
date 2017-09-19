// @flow

import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalDialog from '../ModalDialog';
import ChevronRight from '../icons/actions/ChevronRight';
import colors from '../../lib/colors';
import logo from '../../lib/Logo.svg';


type Props = {
  className: string,
  isVisible: boolean,
  onClose: (() => void),
}

function NotFound(props: Props) {
  const classList = [
    props.className,
    'not-found-page',
  ].filter(Boolean);

  return (<ModalDialog className={classList.join(' ')} isVisible={props.isVisible}>
    <header>
      <img alt="" className="logo" src={logo} />
      <h1>Error 404</h1>
    </header>

    <section>
      <p>{'Oops, that shouldn\'t have happened!'}</p>
    </section>

    <footer>
      <Link to="/" className="button-cta-close" onClick={props.onClose}>
        Return Home <ChevronRight />
      </Link>
    </footer>
  </ModalDialog>);
}


const StyledNotFound = styled(NotFound)`
  @media (max-height: 320px), (max-width: 320px) {
    font-size: 90%;
  }
  .close-dialog {
    display: none;
  }
  .modal-dialog-content {
    padding: 15px;
    display: flex;
    flex-direction: row;
    overflow: auto;
    img.logo {
      width: 200px;
    }
    @media (max-width: 768px) {
      > header {
        img.logo {
          width: 150px;
        }
      }
    }
    @media (max-width: 1199px) {
      flex-direction: column !important;
      > footer, > header {
        text-align: center;
        width: 75%;
        margin: 0 12.5%;
      }
    }
    @media (min-width: 1200px) {
      justify-content: center;
      align-items: center;
      > header, footer {
        flex: 1;
      }
      > section {
        flex: 2;
      }
    }

    max-width: 1200px;

    .button-cta-close {
      display: inline-block;
      border: none;
      outline: none;
      color: white;
      background-color: ${colors.linkColor};
      font-size: 1.25em;
      line-height: 1;
      padding: 0.5em 0.75em;
      margin: 1em;
      cursor: pointer;
      > svg {
        margin-left: 10px;
      }
    }
  }
`;

export default StyledNotFound;
