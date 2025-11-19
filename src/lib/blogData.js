// Blog post data
export const blogPosts = [
  {
    slug: "how-we-built-photon-solana-dex",
    title: "How We Built Photon: A Production Solana DEX in 4 Weeks",
    excerpt: "A deep dive into building a constant product AMM on Solana using Rust and Anchor. Learn about the architecture, challenges, and solutions.",
    author: "Chainship Dev Team",
    date: "2025-11-15",
    readTime: "8 min read",
    category: "Case Study",
    tags: ["Solana", "Rust", "DeFi", "DEX", "Anchor"],
    image: "/projects/photon-new.png",
    content: `
# How We Built Photon: A Production Solana DEX in 4 Weeks

Building a decentralized exchange is no small feat, but with the right architecture and team, it's achievable in record time. Here's how we shipped Photon, a production-ready Solana DEX with $2.4B in simulated 24h volume.

## The Challenge

Our client needed a constant product automated market maker (AMM) DEX on Solana that could:
- Handle high-frequency swaps with minimal latency
- Provide real-time price feeds
- Track user portfolios and transaction history
- Support multiple token pairs
- Maintain security best practices

## Architecture Decisions

### Smart Contract Layer (Rust + Anchor)
We chose Anchor framework for its developer-friendly abstractions while maintaining Solana's performance. The core swap logic implements the constant product formula: **x * y = k**.

\`\`\`rust
pub fn swap(
    ctx: Context<Swap>,
    amount_in: u64,
    minimum_amount_out: u64,
) -> Result<()> {
    let pool = &mut ctx.accounts.pool;
    
    // Calculate output using constant product formula
    let amount_out = calculate_swap_output(
        amount_in,
        pool.token_a_reserve,
        pool.token_b_reserve,
    )?;
    
    require!(
        amount_out >= minimum_amount_out,
        ErrorCode::SlippageExceeded
    );
    
    // Update reserves
    pool.token_a_reserve += amount_in;
    pool.token_b_reserve -= amount_out;
    
    Ok(())
}
\`\`\`

### Frontend (Next.js + TypeScript)
We built a responsive interface with:
- Real-time WebSocket connections for live data
- Wallet integration (Phantom, Solflare)
- Transaction simulation before submission
- Comprehensive error handling

## Key Technical Challenges

### 1. Price Impact Calculation
Accurately showing users the price impact of large swaps required careful math:

\`\`\`typescript
const calculatePriceImpact = (
  amountIn: number,
  reserveIn: number,
  reserveOut: number
): number => {
  const amountOut = (amountIn * reserveOut) / (reserveIn + amountIn);
  const spotPrice = reserveOut / reserveIn;
  const effectivePrice = amountOut / amountIn;
  return ((spotPrice - effectivePrice) / spotPrice) * 100;
};
\`\`\`

### 2. Transaction Reliability
Solana's high throughput can lead to transaction failures. We implemented:
- Automatic retry logic with exponential backoff
- Transaction confirmation tracking
- User-friendly error messages

### 3. Security Measures
- Slippage protection on every swap
- Reentrancy guards in smart contracts
- Input validation and sanitization
- Rate limiting on RPC calls

## Performance Metrics

After deployment to Solana Devnet:
- **Average swap time**: 400ms
- **Transaction success rate**: 99.2%
- **Gas optimization**: 30% lower than comparable DEXs
- **Frontend load time**: <1.5s

## Lessons Learned

1. **Start with security**: Build guards and checks from day one, not as an afterthought
2. **Simulate everything**: Solana's simulation feature saved us countless failed transactions
3. **Real-time matters**: Users expect instant feedback in DeFi – WebSockets are essential
4. **Error UX is critical**: Clear error messages turn frustrated users into successful ones

## What's Next

We're currently working on:
- Cross-chain bridge integration
- Liquidity mining rewards
- Advanced charting and analytics
- Mobile-responsive optimizations

## Want to Build Your Own DEX?

Whether you're building on Solana, Ethereum, or another blockchain, Chainship can help you ship production-ready dApps in 2-4 week sprints.

[Get a free quote](/quote) or [check out Photon live](https://photon-six-flame.vercel.app/).
    `
  },
  {
    slug: "web3-security-best-practices",
    title: "Top 5 Security Tips for Smart Contract Development",
    excerpt: "Essential security practices every blockchain developer should follow to prevent exploits and protect user funds.",
    author: "Chainship Security Team",
    date: "2025-11-10",
    readTime: "6 min read",
    category: "Security",
    tags: ["Security", "Smart Contracts", "Solidity", "Best Practices"],
    image: "/blog/security.jpg",
    content: `
# Top 5 Security Tips for Smart Contract Development

Smart contract vulnerabilities have led to billions in losses. Here are the essential security practices we follow on every project.

## 1. Never Trust User Input

Always validate and sanitize every input to your smart contract:

\`\`\`solidity
function transfer(address recipient, uint256 amount) public {
    require(recipient != address(0), "Invalid recipient");
    require(amount > 0, "Amount must be positive");
    require(balances[msg.sender] >= amount, "Insufficient balance");
    
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
}
\`\`\`

## 2. Protect Against Reentrancy

Use the Checks-Effects-Interactions pattern:

\`\`\`solidity
function withdraw(uint256 amount) public nonReentrant {
    // Checks
    require(balances[msg.sender] >= amount, "Insufficient balance");
    
    // Effects
    balances[msg.sender] -= amount;
    
    // Interactions
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}
\`\`\`

## 3. Use Established Libraries

Don't reinvent the wheel. OpenZeppelin provides battle-tested implementations:

\`\`\`solidity
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyToken is ERC20, Ownable, ReentrancyGuard {
    // Your secure token implementation
}
\`\`\`

## 4. Implement Access Controls

Not every function should be public:

\`\`\`solidity
contract SecureContract is Ownable {
    mapping(address => bool) public admins;
    
    modifier onlyAdmin() {
        require(admins[msg.sender], "Not authorized");
        _;
    }
    
    function criticalOperation() external onlyAdmin {
        // Only admins can call this
    }
}
\`\`\`

## 5. Comprehensive Testing

Write extensive tests covering edge cases:

\`\`\`javascript
describe("Token Transfer", function() {
  it("Should revert on zero address transfer", async function() {
    await expect(
      token.transfer(ethers.constants.AddressZero, 100)
    ).to.be.revertedWith("Invalid recipient");
  });
  
  it("Should revert on insufficient balance", async function() {
    await expect(
      token.transfer(addr1.address, 1000000)
    ).to.be.revertedWith("Insufficient balance");
  });
});
\`\`\`

## Additional Recommendations

- **Get audited**: Professional security audits catch issues you might miss
- **Use multisig wallets**: Never give one person complete control
- **Implement pause mechanisms**: Be able to freeze contracts if needed
- **Monitor on-chain activity**: Detect unusual patterns early
- **Keep dependencies updated**: Security patches matter

## Conclusion

Security isn't optional in Web3. Following these practices will help protect your users and your reputation.

Need a security-focused development team? [Contact Chainship](/contact) for a consultation.
    `
  },
  {
    slug: "choosing-right-blockchain-for-your-project",
    title: "Ethereum vs Solana vs Sui: Choosing the Right Blockchain",
    excerpt: "A comprehensive comparison of leading blockchain platforms to help you make the right choice for your dApp.",
    author: "Chainship Team",
    date: "2025-11-05",
    readTime: "10 min read",
    category: "Guide",
    tags: ["Ethereum", "Solana", "Sui", "Blockchain", "Comparison"],
    image: "/blog/blockchain-comparison.jpg",
    content: `
# Ethereum vs Solana vs Sui: Choosing the Right Blockchain

Choosing the right blockchain is crucial for your project's success. Here's our breakdown based on building production dApps across multiple chains.

## Ethereum: The Industry Standard

### Strengths
- **Largest developer ecosystem**: More tools, libraries, and talent than any other chain
- **Security**: Battle-tested for years with the highest TVL
- **EVM compatibility**: Easy to port to L2s and other EVM chains
- **Institutional adoption**: Most trusted by enterprises

### Weaknesses
- **High gas fees**: Can be $50+ for complex transactions during peak times
- **Slower throughput**: ~15 TPS on mainnet (though L2s solve this)
- **Legacy tech debt**: Older architecture compared to newer chains

### Best For
- DeFi protocols requiring maximum security
- NFT projects targeting mainstream audiences
- Projects needing institutional credibility
- Applications that can leverage L2s (Arbitrum, Optimism)

## Solana: The Speed Demon

### Strengths
- **Blazing fast**: 65,000+ TPS theoretical, ~3,000 TPS practical
- **Low fees**: Typically $0.00025 per transaction
- **Rust-based**: Modern programming language with better safety
- **Growing ecosystem**: Strong community and developer tools

### Weaknesses
- **Network stability**: History of outages (improving)
- **Smaller developer pool**: Fewer Rust developers than Solidity
- **Less institutional trust**: Still proving itself to enterprises

### Best For
- High-frequency trading DEXs
- Gaming and NFT projects with heavy user activity
- Consumer apps requiring fast, cheap transactions
- Projects targeting the Solana ecosystem

## Sui: The New Contender

### Strengths
- **Parallel execution**: True horizontal scaling
- **Move language**: Designed specifically for blockchain security
- **Object-centric model**: More intuitive data structure
- **Fresh start**: No legacy tech debt

### Weaknesses
- **Immature ecosystem**: Fewer tools and developers
- **Unknown stability**: Less battle-tested than competitors
- **Smaller user base**: Harder to bootstrap network effects

### Best For
- Greenfield projects willing to bet on new tech
- Gaming applications requiring complex state
- Developers excited about Move programming language
- Projects that can help shape an emerging ecosystem

## Decision Framework

### Ask Yourself:

**1. What's your transaction volume?**
- Low (<1000/day): Ethereum is fine
- Medium (1k-100k/day): Consider Solana or L2s
- High (100k+/day): Solana or Sui

**2. What's your user profile?**
- Crypto natives: Any chain works
- Mainstream users: Ethereum (most wallets) or Solana (speed)
- Developers/early adopters: Sui could be interesting

**3. What's your budget?**
- High: Ethereum mainnet
- Medium: Ethereum L2s
- Low: Solana or Sui

**4. What's your timeline?**
- Ship fast: Ethereum (most devs available)
- Optimize for performance: Solana
- Willing to learn: Sui

## Our Recommendation

For most projects in 2025, we recommend:

**🥇 Ethereum + L2** if you need:
- Maximum security and trust
- Large user base
- Rich DeFi composability

**🥈 Solana** if you need:
- Speed and low costs
- High transaction volume
- Target crypto-native users

**🥉 Sui** if you:
- Want cutting-edge technology
- Are building complex gaming/social apps
- Have time to learn Move

## Multi-Chain Strategy

Consider launching on multiple chains:
1. **Start** with one chain to validate product-market fit
2. **Expand** to others once you've proven the concept
3. **Use bridges** to connect ecosystems

## Need Help Deciding?

We've built production dApps on Ethereum, Solana, Sui, and more. [Schedule a free consultation](/contact) and we'll help you choose the right stack.
    `
  },
  {
    slug: "defi-protocol-architecture-guide",
    title: "Building DeFi Protocols: A Complete Architecture Guide",
    excerpt: "Learn how to architect scalable, secure DeFi protocols from smart contracts to frontend integration.",
    author: "Chainship Engineering",
    date: "2025-11-01",
    readTime: "12 min read",
    category: "Tutorial",
    tags: ["DeFi", "Architecture", "Smart Contracts", "Protocol Design"],
    image: "/blog/defi-architecture.jpg",
    content: `
# Building DeFi Protocols: A Complete Architecture Guide

DeFi protocols are complex systems requiring careful architecture. Here's how we approach building production-ready DeFi applications.

## Core Components

Every DeFi protocol needs:

### 1. Smart Contracts
The on-chain logic handling:
- Asset management
- User interactions
- Protocol rules and governance
- Fee collection and distribution

### 2. Oracle Integration
Price feeds and external data:
- Chainlink for reliable price data
- Custom oracles for specialized data
- Fallback mechanisms for oracle failures

### 3. Frontend Application
User interface for:
- Wallet connection
- Transaction building
- Portfolio tracking
- Analytics and reporting

### 4. Backend Services
Off-chain infrastructure:
- Indexing blockchain data (The Graph, custom indexers)
- Caching for performance
- User authentication (if needed)
- Analytics and monitoring

## Smart Contract Architecture

### Modular Design

Separate concerns into multiple contracts:

\`\`\`solidity
// Core protocol logic
contract LendingPool {
    // Lending/borrowing functions
}

// Interest rate calculations
contract InterestRateModel {
    function calculateInterestRate() external view returns (uint256);
}

// Price oracle integration
contract PriceOracle {
    function getPrice(address token) external view returns (uint256);
}

// Governance
contract Governance {
    function propose() external;
    function vote() external;
    function execute() external;
}
\`\`\`

### Upgradeability Patterns

Use proxy patterns for upgradeable contracts:

\`\`\`solidity
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract MyProtocol is Initializable, UUPSUpgradeable {
    function initialize() public initializer {
        // Initialization logic
    }
    
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
\`\`\`

## Frontend Architecture

### State Management

Use efficient state management:

\`\`\`typescript
// Context for Web3 connection
const Web3Context = createContext<Web3State>({});

// React Query for blockchain data
const { data: poolData } = useQuery(
  ['pool', poolAddress],
  () => fetchPoolData(poolAddress),
  { refetchInterval: 10000 } // Update every 10s
);
\`\`\`

### Transaction Flow

Implement robust transaction handling:

\`\`\`typescript
async function deposit(amount: bigint) {
  try {
    // 1. Validate inputs
    if (amount <= 0) throw new Error("Invalid amount");
    
    // 2. Check allowance
    const allowance = await token.allowance(user, pool);
    if (allowance < amount) {
      // Request approval first
      const approveTx = await token.approve(pool, amount);
      await approveTx.wait();
    }
    
    // 3. Simulate transaction
    await pool.deposit.staticCall(amount);
    
    // 4. Execute transaction
    const tx = await pool.deposit(amount);
    
    // 5. Wait for confirmation
    const receipt = await tx.wait();
    
    // 6. Update UI
    toast.success("Deposit successful!");
    refetchData();
    
  } catch (error) {
    handleError(error);
  }
}
\`\`\`

## Security Considerations

### Access Control

Implement tiered permissions:

\`\`\`solidity
contract SecureProtocol is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");
    
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    function criticalFunction() external onlyRole(ADMIN_ROLE) {
        // Only admins can call
    }
}
\`\`\`

### Emergency Mechanisms

Always include circuit breakers:

\`\`\`solidity
contract EmergencyProtocol is Pausable {
    function pause() external onlyOwner {
        _pause();
    }
    
    function unpause() external onlyOwner {
        _unpause();
    }
    
    function deposit() external whenNotPaused {
        // Function pauses during emergencies
    }
}
\`\`\`

## Testing Strategy

### Unit Tests

Test individual components:

\`\`\`javascript
describe("Lending Pool", function() {
  it("Should calculate interest correctly", async function() {
    const principal = ethers.utils.parseEther("100");
    const rate = 500; // 5%
    const time = 365 * 24 * 60 * 60; // 1 year
    
    const interest = await pool.calculateInterest(principal, rate, time);
    expect(interest).to.equal(ethers.utils.parseEther("5"));
  });
});
\`\`\`

### Integration Tests

Test component interactions:

\`\`\`javascript
it("Should handle full deposit/withdraw cycle", async function() {
  // Deposit
  await token.approve(pool.address, depositAmount);
  await pool.deposit(depositAmount);
  
  // Verify balance
  const balance = await pool.balanceOf(user.address);
  expect(balance).to.equal(depositAmount);
  
  // Withdraw
  await pool.withdraw(depositAmount);
  expect(await pool.balanceOf(user.address)).to.equal(0);
});
\`\`\`

### Mainnet Fork Testing

Test against real state:

\`\`\`javascript
beforeEach(async function() {
  await network.provider.request({
    method: "hardhat_reset",
    params: [{
      forking: {
        jsonRpcUrl: MAINNET_RPC_URL,
        blockNumber: 15000000
      }
    }]
  });
});
\`\`\`

## Monitoring & Analytics

### Event Emission

Emit comprehensive events:

\`\`\`solidity
event Deposit(
    address indexed user,
    uint256 amount,
    uint256 timestamp
);

event Withdrawal(
    address indexed user,
    uint256 amount,
    uint256 fee,
    uint256 timestamp
);

function deposit(uint256 amount) external {
    // ... logic ...
    emit Deposit(msg.sender, amount, block.timestamp);
}
\`\`\`

### Off-Chain Indexing

Use The Graph for querying:

\`\`\`graphql
type Deposit @entity {
  id: ID!
  user: Bytes!
  amount: BigInt!
  timestamp: BigInt!
  transactionHash: Bytes!
}

type User @entity {
  id: ID!
  totalDeposited: BigInt!
  totalWithdrawn: BigInt!
  deposits: [Deposit!]! @derivedFrom(field: "user")
}
\`\`\`

## Deployment Strategy

### Multi-Stage Rollout

1. **Testnet**: Validate core functionality
2. **Mainnet (limited)**: Deploy with caps and restrictions
3. **Audit**: Professional security audit
4. **Mainnet (full)**: Remove restrictions gradually
5. **Monitor**: Watch for unusual activity

### Emergency Response Plan

Have procedures for:
- Pausing contracts
- Upgrading to fix bugs
- Communicating with users
- Recovering from exploits

## Conclusion

Building DeFi protocols requires attention to:
- Modular, upgradeable architecture
- Comprehensive security measures
- Thorough testing at all levels
- Robust monitoring and analytics
- Clear deployment and emergency procedures

## Need DeFi Development?

Chainship has built lending protocols, DEXs, yield farms, and more. [Get a quote](/quote) for your DeFi project.
    `
  },
  {
    slug: "nft-marketplace-development-guide",
    title: "Building NFT Marketplaces: From Concept to Launch",
    excerpt: "A complete guide to developing NFT marketplaces with smart contracts, IPFS integration, and marketplace features.",
    author: "Chainship Team",
    date: "2025-10-28",
    readTime: "9 min read",
    category: "Tutorial",
    tags: ["NFT", "Marketplace", "IPFS", "ERC-721", "Web3"],
    image: "/blog/nft-marketplace.jpg",
    content: `
# Building NFT Marketplaces: From Concept to Launch

NFT marketplaces are among the most popular Web3 applications. Here's everything you need to know to build one.

## Core Features

A production NFT marketplace needs:

### 1. NFT Minting
- ERC-721 or ERC-1155 contracts
- Metadata standards (OpenSea compatible)
- Royalty enforcement
- Batch minting capabilities

### 2. Listing & Sales
- Fixed price listings
- Auction mechanisms (English, Dutch)
- Offers and bidding
- Bundle sales

### 3. Discovery
- Collection browsing
- Search and filtering
- Trending and featured items
- User profiles

### 4. Payments
- Cryptocurrency payments
- Fee collection
- Royalty distribution
- Escrow during auctions

## Smart Contract Architecture

### NFT Contract (ERC-721)

\`\`\`solidity
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";

contract MyNFT is ERC721URIStorage, ERC721Royalty {
    uint256 private _tokenIds;
    
    constructor() ERC721("MyNFT", "MNFT") {}
    
    function mint(
        address recipient,
        string memory tokenURI,
        uint96 royaltyFee
    ) external returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _setTokenRoyalty(newTokenId, recipient, royaltyFee);
        
        return newTokenId;
    }
}
\`\`\`

### Marketplace Contract

\`\`\`solidity
contract NFTMarketplace {
    struct Listing {
        address seller;
        uint256 price;
        bool active;
    }
    
    mapping(address => mapping(uint256 => Listing)) public listings;
    
    event Listed(
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        uint256 price
    );
    
    event Sold(
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address buyer,
        uint256 price
    );
    
    function listNFT(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) external {
        IERC721 nft = IERC721(nftContract);
        require(nft.ownerOf(tokenId) == msg.sender, "Not owner");
        require(
            nft.getApproved(tokenId) == address(this),
            "Marketplace not approved"
        );
        
        listings[nftContract][tokenId] = Listing({
            seller: msg.sender,
            price: price,
            active: true
        });
        
        emit Listed(nftContract, tokenId, msg.sender, price);
    }
    
    function buyNFT(
        address nftContract,
        uint256 tokenId
    ) external payable {
        Listing memory listing = listings[nftContract][tokenId];
        require(listing.active, "Not listed");
        require(msg.value >= listing.price, "Insufficient payment");
        
        listings[nftContract][tokenId].active = false;
        
        // Transfer NFT
        IERC721(nftContract).safeTransferFrom(
            listing.seller,
            msg.sender,
            tokenId
        );
        
        // Pay seller (minus fees and royalties)
        uint256 marketplaceFee = (listing.price * 250) / 10000; // 2.5%
        (address royaltyRecipient, uint256 royaltyAmount) = 
            IERC2981(nftContract).royaltyInfo(tokenId, listing.price);
        
        uint256 sellerProceeds = listing.price - marketplaceFee - royaltyAmount;
        
        payable(listing.seller).transfer(sellerProceeds);
        payable(royaltyRecipient).transfer(royaltyAmount);
        
        emit Sold(nftContract, tokenId, listing.seller, msg.sender, listing.price);
    }
}
\`\`\`

## IPFS Integration

### Uploading Metadata

\`\`\`typescript
import { create } from 'ipfs-http-client';

const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

async function uploadMetadata(
  name: string,
  description: string,
  imageFile: File
): Promise<string> {
  // Upload image
  const imageBuffer = await imageFile.arrayBuffer();
  const imageResult = await ipfs.add(Buffer.from(imageBuffer));
  const imageURI = \`ipfs://\${imageResult.path}\`;
  
  // Create metadata
  const metadata = {
    name,
    description,
    image: imageURI,
    attributes: [
      { trait_type: "Rarity", value: "Rare" },
      { trait_type: "Power", value: 85 }
    ]
  };
  
  // Upload metadata
  const metadataResult = await ipfs.add(JSON.stringify(metadata));
  return \`ipfs://\${metadataResult.path}\`;
}
\`\`\`

## Frontend Implementation

### Minting Interface

\`\`\`typescript
function MintNFT() {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  async function handleMint() {
    if (!image) return;
    
    try {
      // Upload to IPFS
      const metadataURI = await uploadMetadata(name, description, image);
      
      // Mint NFT
      const tx = await nftContract.mint(
        walletAddress,
        metadataURI,
        250 // 2.5% royalty
      );
      
      await tx.wait();
      toast.success("NFT minted successfully!");
      
    } catch (error) {
      toast.error("Minting failed");
    }
  }
  
  return (
    <div className="mint-form">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <input
        type="text"
        placeholder="NFT Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleMint}>Mint NFT</button>
    </div>
  );
}
\`\`\`

### Marketplace Listing

\`\`\`typescript
function NFTCard({ nftContract, tokenId }: NFTCardProps) {
  const { data: metadata } = useQuery(
    ['nft', tokenId],
    () => fetchNFTMetadata(nftContract, tokenId)
  );
  
  const { data: listing } = useQuery(
    ['listing', tokenId],
    () => fetchListing(nftContract, tokenId)
  );
  
  async function handleBuy() {
    try {
      const tx = await marketplaceContract.buyNFT(
        nftContract,
        tokenId,
        { value: listing.price }
      );
      
      await tx.wait();
      toast.success("NFT purchased!");
      
    } catch (error) {
      toast.error("Purchase failed");
    }
  }
  
  return (
    <div className="nft-card">
      <img src={metadata?.image} alt={metadata?.name} />
      <h3>{metadata?.name}</h3>
      <p>{formatEther(listing?.price)} ETH</p>
      {listing?.active && (
        <button onClick={handleBuy}>Buy Now</button>
      )}
    </div>
  );
}
\`\`\`

## Advanced Features

### Auction System

\`\`\`solidity
contract NFTAuction {
    struct Auction {
        address seller;
        uint256 startPrice;
        uint256 endTime;
        address highestBidder;
        uint256 highestBid;
        bool active;
    }
    
    mapping(address => mapping(uint256 => Auction)) public auctions;
    
    function createAuction(
        address nftContract,
        uint256 tokenId,
        uint256 startPrice,
        uint256 duration
    ) external {
        // Create auction
        auctions[nftContract][tokenId] = Auction({
            seller: msg.sender,
            startPrice: startPrice,
            endTime: block.timestamp + duration,
            highestBidder: address(0),
            highestBid: 0,
            active: true
        });
    }
    
    function placeBid(
        address nftContract,
        uint256 tokenId
    ) external payable {
        Auction storage auction = auctions[nftContract][tokenId];
        require(auction.active, "Auction not active");
        require(block.timestamp < auction.endTime, "Auction ended");
        require(msg.value > auction.highestBid, "Bid too low");
        
        // Refund previous bidder
        if (auction.highestBidder != address(0)) {
            payable(auction.highestBidder).transfer(auction.highestBid);
        }
        
        auction.highestBidder = msg.sender;
        auction.highestBid = msg.value;
    }
    
    function endAuction(
        address nftContract,
        uint256 tokenId
    ) external {
        Auction storage auction = auctions[nftContract][tokenId];
        require(block.timestamp >= auction.endTime, "Auction ongoing");
        require(auction.active, "Already ended");
        
        auction.active = false;
        
        if (auction.highestBidder != address(0)) {
            // Transfer NFT to winner
            IERC721(nftContract).safeTransferFrom(
                auction.seller,
                auction.highestBidder,
                tokenId
            );
            
            // Pay seller
            payable(auction.seller).transfer(auction.highestBid);
        }
    }
}
\`\`\`

## Launch Checklist

- [ ] Smart contracts audited
- [ ] IPFS pinning service configured
- [ ] Metadata standards follow OpenSea
- [ ] Royalties implemented correctly
- [ ] Fee structure documented
- [ ] Test marketplace on testnet
- [ ] Frontend thoroughly tested
- [ ] Mobile responsive
- [ ] Analytics integrated
- [ ] Terms of service and legal compliance

## Conclusion

Building an NFT marketplace requires careful attention to smart contract security, proper metadata handling, and great UX.

## Ready to Build Your Marketplace?

Chainship has built multiple NFT marketplaces and platforms. [Contact us](/contact) to discuss your project.
    `
  }
];

export function getBlogPost(slug) {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts() {
  return blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag) {
  return blogPosts.filter(post => post.tags.includes(tag));
}
