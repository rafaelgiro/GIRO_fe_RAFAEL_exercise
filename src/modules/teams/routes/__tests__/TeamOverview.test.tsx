jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      teamName: 'Some Team',
    },
  }),
  useNavigate: () => ({}),
  useParams: () => ({
    teamId: '1',
  }),
}));

describe('TeamOverview', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // it.skip('should render team overview users', async () => {
  //   const teamOverview = {
  //     id: '1',
  //     teamLeadId: '2',
  //     teamMemberIds: ['3', '4', '5'],
  //   };
  //   const userData = {
  //     id: '2',
  //     firstName: 'userData',
  //     lastName: 'userData',
  //     displayName: 'userData',
  //     location: '',
  //     avatar: '',
  //   };
  //   jest.spyOn(API, 'getTeamOverview').mockImplementationOnce(() => Promise.resolve({} as any));
  //   jest.spyOn(API, 'getUserData').mockImplementationOnce(() => Promise.resolve({} as any));

  //   render(<TeamOverview />);

  //   await waitFor(() => {
  //     expect(screen.queryAllByText('userData')).toHaveLength(4);
  //   });
  // });
});

export {};
