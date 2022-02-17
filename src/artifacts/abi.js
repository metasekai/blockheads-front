export const premintABI = [
  'function buyNewCharacter(uint256 qty) public returns (bool)',
  'function getTotalCharactersMinted() public view returns (uint256)',
  'event NewCharacterMinted(address indexed owner)',
  'event CharacterPriceChanged(uint256 newPrice)',
];

export const characterABI = [
  'function setApprovalForAll(address operator, bool approved) public virtual override',
  'function isApprovedForAll(address owner, address operator) public view virtual override returns (bool)',
  'event NewBlockHeadCreated(address indexed owner, uint256 indexed tokenId)',
];

export const erc20ABI = [
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function allowance(address owner, address spender) external view returns (uint256)',
];
