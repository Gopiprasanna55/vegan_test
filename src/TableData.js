import React from 'react'
import { useGlobalcontext } from './context';

const BOMCardIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
  </svg>
);

const getPartIcon = (partnumber) => {
  const lower = partnumber.toLowerCase();
  if (lower.includes('drive station')) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"></path>
      </svg>
    );
  }
  if (lower.includes('end station')) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9"></circle>
        <circle cx="12" cy="12" r="3.5"></circle>
      </svg>
    );
  }
  if (lower.includes('trough section')) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="16" height="8" rx="2"></rect>
      </svg>
    );
  }
  if (lower.includes('bearing')) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9"></circle>
        <circle cx="12" cy="12" r="5"></circle>
        <circle cx="12" cy="12" r="1.5"></circle>
      </svg>
    );
  }
  if (lower.includes('inlet')) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
      </svg>
    );
  }
  if (lower.includes('outlet')) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" transform="rotate(180 12 12)"></polygon>
      </svg>
    );
  }
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
};


const TableData = () => {
  const { filtertabledata, setPartname, highlightingtext, setHighlightingText, setObjdata, objdata } = useGlobalcontext()

  const onClickSelection = (partnumber) => {
    setHighlightingText(partnumber)
    setPartname(partnumber)

    const data = objdata.filter(value => value.parent !== null);
    setObjdata(data)
    if (data.length === 1) {
      setTimeout(() => {
        const data = objdata.filter(value => value.parent !== null);
        setObjdata(data)
      }, 100)
    }
  }

  const componentCount = filtertabledata.reduce((acc, curr) => acc + (curr.qty || 0), 0);

  return (
    <div className="sidebar-card" style={{ marginBottom: '50px' }}>
      <div className="sidebar-card-header" style={{ cursor: 'default' }}>
        <div className="sidebar-card-header-left">
          <div className="sidebar-card-icon-container">
            <BOMCardIcon />
          </div>
          <div className="sidebar-card-title-group">
            <h4 className="sidebar-card-title">Bill of Materials</h4>
            <span className="sidebar-card-subtitle">{componentCount} components · auto-generated</span>
          </div>
        </div>
      </div>
      <div className="sidebar-card-body">
        <div className="bom-header">
          <span className="bom-header-title">Part Number</span>
          <span className="bom-header-title">Qty</span>
        </div>
        <div className="bom-list">
          {filtertabledata.map((item, i) => {
            const { qty, partnumber } = item;
            const isSelected = highlightingtext === partnumber;
            return (
              <div 
                key={i} 
                className={`bom-item ${isSelected ? 'selected' : ''}`}
                onClick={() => onClickSelection(partnumber)}
              >
                <div className="bom-item-left">
                  <div className="bom-item-icon-container">
                    {getPartIcon(partnumber)}
                  </div>
                  <div className="bom-item-details">
                    <span className="bom-item-desc">{partnumber}</span>
                  </div>
                </div>
                <div className="bom-item-qty-badge">{qty}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default TableData;