import React, { useState, Suspense } from 'react';
import styled from 'styled-components';

// Lazy-loaded components
const ManageAccessCodes = React.lazy(() => import('../components/ManageAccessCodes'));
const ManageSlideshow = React.lazy(() => import('./ManageSlideshow'));
const ManageDocuments = React.lazy(() => import('../components/ManageDocuments'));

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f6f9;
  transition: margin-left 0.3s ease;
`;

const Sidebar = styled.div`
  width: 260px;
  padding: 2rem;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  top: 0;
  left: ${(props) => (props.visible ? '0' : '-300px')};
  height: 100vh; /* Ensure sidebar takes full screen height */
  transition: left 0.3s ease;
  z-index: 1000;

  @media (min-width: 768px) {
    position: relative;
    left: 0;
    visibility: visible;
    height: 100vh; /* Ensure sidebar takes full screen height on larger screens */
  }
`;


const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.2rem;
  background: ${(props) => (props.active ? '#34495e' : 'transparent')};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #34495e;
  }

  span {
    font-size: 1.5rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: ${(props) => (props.sidebarVisible ? '260px' : '0')};
  transition: margin-left 0.3s ease;
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  max-height: calc(100vh - 80px); /* Prevent it from growing beyond the viewport height */

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 55px;
  }
`;


const ToggleButton = styled.button`
  position: fixed;
  top: 1.2rem;
  left: 1.2rem;
  z-index: 1100;
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 8px 14px;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;


const SectionContainer = styled.div`
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Playful gradient */
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center; /* Center the text */
  color: white;

  h3 {
    font-size: 2.5rem; /* Large title */
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    color: #f9fafb; /* Light text for description */
    margin: 0;
  }

  /* Adding some fun animation to the content */
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const CallToActionButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #fff;
  color: #ff7e5f;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #feb47b;
    color: white;
  }
`;


const LoadingMessage = styled.div`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  padding: 2rem;
`;

const AdminDashboard = () => {
  const [activeLink, setActiveLink] = useState('default');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleButtonClick = (section) => {
    setActiveLink(section);
    setSidebarVisible(false);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const DefaultContent = () => (
    <SectionContainer>
      <h3>Welcome to the Admin Dashboard!</h3>
      <p>Select a section from the sidebar to get started.</p>
      <CallToActionButton onClick={() => alert("Hey! click on the links in the side bar")}>
        Get Started
      </CallToActionButton>
      <CallToActionButton onClick={() => alert("Hey! click on the links in the side bar")}>
        Modify your access codes
      </CallToActionButton>
      <CallToActionButton onClick={() => alert("hey! click on the links in the side bar")}>
        retrieve the documents
      </CallToActionButton>

    </SectionContainer>
  );

  return (
    <DashboardContainer>
      {/* Toggle Button */}
      {!sidebarVisible && (
        <ToggleButton onClick={toggleSidebar}>
          ☰
        </ToggleButton>
      )}

      {/* Sidebar */}
      <Sidebar visible={sidebarVisible}>
        <h3 style={{ color: '#ecf0f1', marginBottom: '2rem' }}>Admin Panel</h3>
        <SidebarButton
          active={activeLink === 'accessCodes'}
          onClick={() => handleButtonClick('accessCodes')}
        >
          <span>🔑</span> Access Codes
        </SidebarButton>
        <SidebarButton
          active={activeLink === 'slideshow'}
          onClick={() => handleButtonClick('slideshow')}
        >
          <span>🖼</span> Manage Slideshow
        </SidebarButton>
        <SidebarButton
          active={activeLink === 'documents'}
          onClick={() => handleButtonClick('documents')}
        >
          <span>📄</span> Manage Documents
        </SidebarButton>
      </Sidebar>

      {/* Main Content */}
      <MainContent sidebarVisible={sidebarVisible}>
        {/* Header */}
        {activeLink === 'default' && <DefaultContent />}
        

        {/* Dynamic Content */}
        {activeLink === 'default' && (
          <SectionContainer>
            <p>Select a section from the sidebar to manage your content.</p>
          </SectionContainer>
        )}
        {activeLink === 'accessCodes' && (
          <Suspense fallback={<LoadingMessage>Loading Access Codes...</LoadingMessage>}>
            <SectionContainer>
              <ManageAccessCodes />
            </SectionContainer>
          </Suspense>
        )}
        {activeLink === 'slideshow' && (
          <Suspense fallback={<LoadingMessage>Loading Slideshow...</LoadingMessage>}>
            <SectionContainer>
              <ManageSlideshow />
            </SectionContainer>
          </Suspense>
        )}
        {activeLink === 'documents' && (
          <Suspense fallback={<LoadingMessage>Loading Documents...</LoadingMessage>}>
            <SectionContainer>
              <ManageDocuments />
            </SectionContainer>
          </Suspense>
        )}
      </MainContent>
    </DashboardContainer>
  );
};

export default AdminDashboard;
