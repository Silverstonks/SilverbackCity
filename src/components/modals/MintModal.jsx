import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import actions from '../../store/actions';

const MintModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('translation', { keyPrefix: 'mint_modal' });
  <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>

  const iframeUrl = 'https://afzk.maillist-manage.com/ua/Optin?od=11287ecbcc805e&zx=12daa6a36&tD=1c5df0bdf8a17411&sD=1c5df0bdf8b087c3';
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
        {t('title')}
        </h5>
        <button type="button" className="close" onClick={() => dispatch(actions.applicationActions.updateModalState(false))}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <iframe frameBorder={0} id="iframewin" title="Mint" width="100%" height="100%" src={iframeUrl}></iframe>
      </div>
      {/*<div className="modal-footer">
        <a className="btn btn-success" rel="noreferrer" href="https://metamask.io/download.html" target="_blank">
          Download
        </a>
        </div>*/}
    </>
  );
};

export default MintModal;
