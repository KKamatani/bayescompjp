/*
 * SEMINAR EVENTS
 * Newest first. Add future events by copying one object.
 * Online participation links are shown only for the next seminar.
 */
window.BAYESCOMP_EVENTS = [
  {
    "id": "event-2027-01",
    "date": "2027-01-27",
    "time": "13:30–14:30 JST",
    "venue": "ISM A504",
    "speaker": "矢野翔太，東京大学 / Shota Yano, University of Tokyo",
    "title": "Title to be announced / タイトル未定",
    "language": "Japanese",
    "abstract": [
      "To be announced. / 未定"
    ],
    "links": []
  },
  {
    "id": "event-2026-04",
    "date": "2026-12-02",
    "time": "13:30–14:30 JST",
    "venue": "ISM A504",
    "speaker": "Youjia Wang, National University of Singapore",
    "title": "Group-averaged Markov chains: symmetry, information projections and partition design",
    "language": "English",
    "registration": {
      "label": "Join via Zoom",
      "url": "https://us06web.zoom.us/meeting/register/gew--9i6QbeFJJvkJFpCcA"
    },
    "abstract": [
      "Markov chain Monte Carlo samplers built on local moves mix slowly when the target distribution is multimodal. Many targets, however, carry a symmetry: a group acting on the state space that leaves the target invariant, or nearly so. This talk explains how to exploit it. Given any $\\Pi$-stationary kernel $P$, we compose it with a random group move; the resulting group-averaged kernels keep $\\Pi$ stationary and use $P$ as a black box. The key observation is that averaging over the group is an orthogonal projection. From it we obtain that the spectral gap and the asymptotic variance never get worse, with quantitative gains, and that the averaged kernels are information projections of $P$ satisfying Pythagorean identities. When the target is not exactly invariant, the uniform average is replaced by Gibbs, Metropolis--Hastings or Barker moves within orbits, and the guarantees persist for arbitrary targets on finite state spaces. Since only the orbit partition matters, the group becomes a design parameter. I will present two ways to choose it: spectral algorithms that build the partition from the bottom eigenfunctions of $P$, with approximation guarantees, and a Bregman-divergence framework in which the worst-case optimal partition depends only on the block masses of $\\Pi$ and exhibits a transition between balanced and unbalanced blocks."
    ],
    "links": []
  },
  {
    "id": "event-2026-01",
    "date": "2026-07-16",
    "time": "15:00–16:00 JST",
    "venue": "3rd floor of Building 11, Seikei University",
    "speaker": "Hsin-Hsiung Huang, University of Central Florida",
    "title": "Learning Hidden Roles in Multilayer Networks: Uncertainty Quantification with Applications to U.S. Air Travel",
    "language": "English",
    "abstract": [
      "Network data arise in many modern applications, including transportation systems, social networks, biological networks, and communication systems. In many cases, we observe not just one network, but a collection of related networks over time or across different conditions. For example, U.S. airport traffic can be viewed as a monthly sequence of networks, where airports are nodes and flights between airports are edges.",
      "A central question is how to identify the hidden roles of nodes in such multilayer networks. An airport, for instance, may behave partly like a regional hub and partly like a national connector. These roles may also change in strength over time, especially during major disruptions such as the COVID-19 pandemic. In this talk, I will introduce a statistical framework for learning such mixed roles while also quantifying uncertainty in the results. The method combines fast spectral ideas with a Bayesian-inspired variational approximation, making it computationally practical for large multilayer networks.",
      "The talk will focus on the intuition behind the model, why uncertainty quantification is important, and what can be learned from real data. I will illustrate the method using a U.S. airport transportation network from 2016 to 2021, comparing the network structure before and during the COVID-19 period. I will also briefly discuss the theoretical guarantees behind the method, while keeping the main presentation accessible to students and researchers who may not have extensive background in Bayesian asymptotic theory."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2026"
  },
  {
    "id": "event-2026-02",
    "date": "2026-07-13",
    "time": "15:00–16:00 JST",
    "venue": "ISM A504",
    "speaker": "Ning Ning (Patricia), Texas A&M University",
    "title": "Bayesian Inference for Partially Observed McKean-Vlasov SDEs with Full Distribution Dependence",
    "language": "English",
    "abstract": [
      "McKean–Vlasov stochastic differential equations (MVSDEs) describe systems whose dynamics depend on both individual states and the population distribution, and they arise widely in neuroscience, finance, and epidemiology. In many applications the system is only partially observed, making inference very challenging when both drift and diffusion coefficients depend on the evolving empirical law. This paper develops a Bayesian framework for latent state inference and parameter estimation in such partially observed MVSDEs. We combine time-discretization with particle-based approximations to construct tractable likelihood estimators, and we design two particle Markov chain Monte Carlo (PMCMC) algorithms: a single-level PMCMC method and a multilevel PMCMC (MLPMCMC) method that couples particle systems across discretization levels. The multilevel construction yields correlated likelihood estimates and achieves mean square error O(ε²) at computational cost O(ε⁻⁶), improving on the O(ε⁻⁷) complexity of single-level schemes. We address the fully law-dependent diffusion setting which is the most general formulation of MVSDEs, and provide theoretical guarantees under standard regularity assumptions. Numerical experiments confirm the efficiency and accuracy of the proposed methodology."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2026"
  },
  {
    "id": "event-2026-03",
    "date": "2026-03-02",
    "time": "15:00–16:00 JST",
    "venue": "Seminar Room B, Building No. 6, Faculty of Engineering, Hongo Campus, University of Tokyo",
    "speaker": "Jeffrey S. Rosenthal, University of Toronto",
    "title": "Optimising MCMC Tempering Algorithms",
    "language": "English",
    "abstract": [
      "Markov chain Monte Carlo (MCMC) algorithms are very popular in Bayesian statistics, but have difficulties moving between widely separated modes of the target distribution. A common solution is Simulated or Parallel Tempering algorithms, which use fractional powers of the target density to facilitate inter-mode transitions. This leads to questions about what choices to make re temperature spacings, balancing within- and between-temperature updates, and using reversible or non-reversible update schemes. In this talk, we present some theoretical results about how to optimise these choices to maximise the efficiency of the algorithm."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2026"
  },
  {
    "id": "event-2025-01",
    "date": "2025-05-28",
    "time": "11:00–12:00 JST",
    "venue": "ISM D222",
    "speaker": "Luke Hardcastle, University College London",
    "title": "Diffusion piecewise exponential models for survival extrapolation using Piecewise Deterministic Monte Carlo",
    "language": "English",
    "abstract": [
      "In this talk I will introduce the diffusion piecewise exponential model. Piecewise exponential model is a flexible non-parametric approach for time-to-event data, but extrapolation beyond final observation times typically relies on random walk priors and deterministic knot locations, resulting in unrealistic long-term hazards. The diffusion piecewise exponential model, a prior framework consisting of a discretised diffusion for the hazard, that can encode a wide variety of information about the long-term behaviour of the hazard, time changed by a Poisson process prior for knot locations. This allows the behaviour of the hazard in the observation period to be combined with prior information to inform extrapolations. Efficient posterior sampling is achieved using Piecewise Deterministic Markov Processes, whereby we extend existing approaches using sticky dynamics from sampling spike-and-slab distributions to more general transdimensional posteriors. We focus on applications in Health Technology Assessment, where the need to compute mean survival requires hazard functions to be extrapolated beyond the observation period, showcasing performance on datasets for Colon cancer patients.",
      "This is a joint work with Samuel Livingstone and Gianluca Baio and is based on the pre-print: https://arxiv.org/abs/2505.05932"
    ],
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2505.05932"
      }
    ],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2025"
  },
  {
    "id": "event-2025-02",
    "date": "2025-05-02",
    "time": "13:30–14:30 JST",
    "venue": "Room 126, Graduate School of Mathematical Sciences, University of Tokyo, Komaba Campus",
    "speaker": "今井 竣祐，京大経済 / Shunsuke Imai, Kyoto University",
    "title": "General Bayesian Semiparametric Inference with Hyvärinen Score",
    "language": "English",
    "abstract": [
      "This paper proposes a novel framework for semiparametric Bayesian inference on finite-dimensional parameters under existence of nuisance functions. Based on a pseudo-model defined by (profiled) loss functions for the finite dimensional parameters and the Hyvärinen score, we propose a general posterior distribution, named semiparametric Hyvärinen (SH) posterior. The SH posterior enables us to make inference on the parameters of interest with taking account of uncertainty in the estimation/selection of tuning parameters in estimating the unknown nuisance functions. We establish its theoretical justification of the SH posterior under large samples, and provide posterior computation algorithm. As concrete examples, we provide the posterior inference of partial linear models and single index models, and demonstrate the performance through simulation."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2025"
  },
  {
    "id": "event-2025-03",
    "date": "2025-04-09",
    "time": "10:00–11:00 JST",
    "venue": "ISM D222",
    "speaker": "吉田淳一郎，東大数理 / Junichiro Yoshida, University of Tokyo",
    "title": "Penalized estimation for non-identifiable models",
    "language": "English",
    "abstract": [
      "識別不可能なモデルの応用例は、有限混合分布や点過程の重ね合わせ、更には深層学習など多岐に渡る一方、それらの漸近理論は複雑であるが故、依然として部分的に未発展であり重要な研究対象となっている。そこで、我々は罰則付き推定を用いることにより、識別不可能なモデルにおいても直接的なパラメータ推定及びモデル選択を可能にし、推定量の漸近正規性及びオラクル性を示した。本発表では、証明の鍵となるアイデアについて話し、時間が許せば、特異点解消定理のような発展的話題についても触れる予定である。",
      "While applications of non-identifiable models range from finite mixture distribution and superposed point process to deep learning, asymptotic theory on them remains partially undeveloped and an important research subject due to its complexity. Here, using penalized estimation, we enable direct parametric estimation and model selection even for non-identifiable models, and show the asymptotic normality and oracle property of the estimator. In this presentation, we will discuss the key ideas of the proof and, if time permits, mention some advanced topics such as resolution of singularities."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2025"
  },
  {
    "id": "event-2025-04",
    "date": "2025-04-03",
    "time": "14:30–15:30 JST",
    "venue": "ISM D222",
    "speaker": "塩谷 天章，東大数理 / Takaaki Shiotani, University of Tokyo",
    "title": "Statistical inference for highly correlated stationary point processes and noisy bivariate Neyman-Scott processes",
    "language": "English",
    "abstract": [
      "高頻度金融データにおけるlead-lag推定問題を動機として、ガンマカーネルをもち、必ずしもPoissonとは限らないノイズを許容する、2変量Neyman-Scott点過程モデル(NBNSP-G)を導入する。パラメータ推定は2次のcomposite型疑似尤度を用いて行う。しかしながら、推定量の一致性と漸近正規性を証明しようとすると、ガンマカーネルの発散に起因して、既存の漸近理論でよく仮定されるモーメント密度関数の有界性が破綻してしまう。そこで、有界性を緩和し可積分性の条件下で一般の2変量点過程に対する推定量の漸近論を構築し、その系としてNBNSP-Gに対する推定量の一致性と漸近正規性を示した。",
      "Motivated by the lead-lag estimation in high-frequency financial data, we introduce a bivariate Neyman-Scott point process model that employs a gamma kernel and allows for noise that is not necessarily Poisson (NBNSP-G). Parameter estimation is performed using a second-order composite-type likelihood. However, when attempting to prove consistency and asymptotic normality of the estimators, the unboundedness arising from the gamma kernel causes a failure of the boundedness condition on the moment density function that is often assumed in existing asymptotic theory. To address this, we relax the boundedness assumption to an integrability condition and develop an asymptotic theory for estimators of general bivariate point processes. As a corollary, we establish the consistency and asymptotic normality of the estimators for NBNSP-G."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2025"
  },
  {
    "id": "event-2025-05",
    "date": "2025-03-13",
    "time": "13:30–14:30 JST",
    "venue": "ISM D222",
    "speaker": "行德 義弘, 東大数理 / Yoshihiro Gyotoku, University of Tokyo",
    "title": "Nonparametric Point Process Regression",
    "language": "English",
    "abstract": [
      "我々は、Muni-Toke Yoshida (2022) で提案された点過程回帰モデルのノンパラメトリックなバージョンを提案し、その汎化誤差に理論的な上界を与えた。この結果は、Schmidt-Hieber (2020) で示された独立同分布観測に対するノンパラメトリック回帰モデルに対する理論を拡張するものである。証明のために、新たな大偏差不等式を導入した。具体的には、強混合性または弱従属性を満たす確率過程に対して Merlevède, Peligrad and Rio (2010) で与えられた不等式を、今回の証明に必要な要件を満たすように改良したものである。本発表では、この改良した不等式の必要性およびその証明の主要なアイディアについても概説する。時間が許せば、深層学習を用いた回帰問題、特に指値注文票の解析への応用についても紹介する。",
      "We propose a nonparametric version of the point process regression model introduced by Muni-Toke Yoshida (2022) and establish a theoretical upper bound on its generalization error. This result extends the nonparametric regression model for independently and identically distributed observations presented in Schmidt-Hieber (2020). To prove our result, we introduce a new large deviation inequality. Specifically, we adapt the inequality provided by Merlevède, Peligrad and Rio (2010) for stochastic processes satisfying either the strong mixing or weak dependence property so that it meets the necessary requirements for our proof. We also outline the necessity and main ideas behind this modified inequality. If time permits, we will present an application of our approach to regression problems in deep learning, focusing on the analysis of limit order book data."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2025"
  },
  {
    "id": "event-2024-01",
    "date": "2024-09-09",
    "time": "13:15–14:15 JST",
    "venue": "Room 368, Building No. 6, Faculty of Engineering, Hongo Campus, University of Tokyo",
    "speaker": "Sumeetpal Singh, University of Wollongong",
    "title": "How quickly does the particle filter forget its initialisation?",
    "language": "English",
    "abstract": [
      "We study the forgetting properties of the particle filter when its state — the collection of particles — is regarded as a Markov chain. Under a strong mixing assumption on the particle filter’s underlying Feynman–Kac model, we find that the particle filter is exponentially mixing, and forgets its initial state in O(logN) ‘time’, where N is the number of particles and time refers to the number of particle filter algorithm steps, each comprising a selection (or resampling) and mutation (or prediction) operation. We present an example which suggests that this rate is optimal. In contrast to our result, available results to-date are extremely conservative, suggesting O(αN) time steps are needed, for some α > 1, for the particle filter to forget its initialisation. We also study the conditional particle filter (CPF) and extend our forgetting result to this context. We establish a similar conclusion, namely, CPF is exponentially mixing and forgets its initial state in O(logN) time. To support this analysis, we establish new time-uniform Lp error estimates for CPF, which can be of independent interest."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2024-02",
    "date": "2024-07-22",
    "time": "13:15–14:15 JST",
    "venue": "ISM D222",
    "speaker": "Takeru Matsuda, University of Tokyo, RIKEN Center for Brain Science",
    "title": "Inadmissibility of the corrected Akaike information criterion",
    "language": "English",
    "abstract": [
      "For the multivariate linear regression model with unknown covariance, the corrected Akaike information criterion is the minimum variance unbiased estimator of the expected Kullback–Leibler discrepancy. In this study, based on the loss estimation framework, we show its inadmissibility as an estimator of the Kullback–Leibler discrepancy itself, instead of the expected Kullback–Leibler discrepancy. We provide improved estimators of the Kullback–Leibler discrepancy that work well in reduced-rank situations and examine their performance numerically. This result is similar to Stein’s paradox in that the minimum variance unbiased estimator is improved by introducing bias."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2024-03",
    "date": "2024-06-05",
    "time": "13:15–14:15 JST",
    "venue": "ISM D222",
    "speaker": "Dennis Shen, USC Marshall",
    "title": "Same Root Different Leaves: Time Series and Cross-Sectional Methods in Panel Data",
    "language": "English",
    "abstract": [
      "One dominant approach to evaluate the causal effect of a treatment is through panel data analysis, whereby the behaviors of multiple units are observed over time. The information across time and units motivates two general approaches: (i) horizontal regression (i.e., unconfoundedness), which exploits time series patterns, and (ii) vertical regression (e.g., synthetic controls), which exploits cross‐sectional patterns. Conventional wisdom often considers the two approaches to be different. We establish this position to be partly false for estimation but generally true for inference. In the absence of any assumptions, we show that both approaches yield algebraically equivalent point estimates for several standard estimators. However, the source of randomness assumed by each approach leads to a distinct estimand and quantification of uncertainty even for the same point estimate. This emphasizes that researchers should carefully consider where the randomness stems from in their data, as it has direct implications for the accuracy of inference."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2024-04",
    "date": "2024-05-13",
    "time": "15:00–16:00 JST",
    "venue": "ISM D222",
    "speaker": "Kaoru Irie, University of Tokyo",
    "title": "Gibbs sampler for matrix generalized inverse Gaussian distributions",
    "language": "English",
    "abstract": [
      "Matrix generalized inverse Gaussian (MGIG) distributions are a multivariate extension of the well-known univariate GIG distributions. Typically, the MGIG distributions are obtained as the full conditional posterior distributions of the variance matrix in many multivariate models, such as the location-scale mixture of multivariate normals. Thus, in implementing Markov chain Monte Carlo (MCMC) algorithms for posterior inference, simulation from the MGIG distributions is required. However, an efficient sampling scheme for the MGIG distributions has not been fully developed. In this study, we propose a novel blocked Gibbs sampler for the MGIG distributions based on the Cholesky decomposition. We show that the full conditionals of the entries of the diagonal and unit lower-triangular matrices are univariate GIG and multivariate normal distributions, respectively. Several variants of the Metropolis-Hastings algorithm can also be considered for this problem, but we mathematically prove that the average acceptance rates become extremely low in particular scenarios. We demonstrate the computational efficiency of the proposed Gibbs sampler through simulation studies and data analysis. This is joint work with Yasuyuki Hamura (Kyoto) and Shonosuke Sugasawa (Keio)."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2024-05",
    "date": "2024-04-22",
    "time": "15:00–16:00 JST",
    "venue": "ISM D222",
    "speaker": "奥戸 道子, 東大情報理工 / Michiko Okudo, University of Tokyo",
    "title": "事後平均とMAP推定量を漸近的に一致させる matching prior pair",
    "language": "Japanese",
    "abstract": [
      "ベイズ法に現れる推定量の性質や情報幾何との関連について、最近得られた結果[1]を紹介する。",
      "MAP推定量と事後平均はベイズ法でよく用いられる推定量であるが、本研究ではこの２つが漸近的に一致する事前分布のペアを求める。",
      "ペアの密度が満たす条件を導出し、情報幾何でα-平坦と呼ばれるクラスのモデルでは条件が簡単な形で書けることを紹介する。",
      "指数型分布族や一般化線形モデルを含むいくつかの解析的な例と数値例を紹介する。",
      "この研究は統計数理研究所の矢野恵佑氏との共同研究である。",
      "ベイズ法と情報幾何に関する講演者のこれまでの研究の概観も紹介する予定である。",
      "参考文献：",
      "[1] M. Okudo & K. Yano (2023). Matching prior pairs connecting Maximum A Posteriori estimation and posterior expectation. arXiv preprint arXiv:2312.09586."
    ],
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2312.09586"
      }
    ],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2024-06",
    "date": "2024-03-18",
    "time": "13:00–14:00 JST",
    "venue": "RIKEN Center for Brain Science, Central Building, C202",
    "speaker": "Omar Chehab, ENSAE-CREST",
    "title": "Provable benefits of annealing for estimating normalizing constants: Importance Sampling, Noise-Contrastive Estimation, and beyond",
    "language": "English",
    "abstract": [
      "Recent research has developed several Monte Carlo methods for estimating the normalization constant (partition function) based on the idea of annealing. This means sampling successively from a path of distributions that interpolate between a tractable \"proposal\" distribution and the unnormalized \"target\" distribution. Prominent estimators in this family include annealed importance sampling and annealed noise-contrastive estimation (NCE). Such methods hinge on a number of design choices: which estimator to use, which path of distributions to use and whether to use a path at all; so far, there is no definitive theory on which choices are efficient. Here, we evaluate each design choice by the asymptotic estimation error it produces. First, we show that using NCE is more efficient than the importance sampling estimator, but in the limit of infinitesimal path steps, the difference vanishes. Second, we find that using the geometric path brings down the estimation error from an exponential to a polynomial function of the parameter distance between the target and proposal distributions. Third, we find that the arithmetic path, while rarely used, can offer optimality properties over the universally-used geometric path. In fact, in a particular limit, the optimal path is arithmetic. Based on this theory, we finally propose a two-step estimator to approximate the optimal path in an efficient way."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2024-07",
    "date": "2024-03-07",
    "time": "11:00–12:00 JST",
    "venue": "Seminar Room B, 3rd Floor, Building No. 6, Faculty of Engineering, Hongo Campus, University of Tokyo",
    "speaker": "Arnaud Doucet / Oxford University & Google Deep Mind",
    "title": "Ensemble Rejection Sampling",
    "language": "English",
    "abstract": [
      "We introduce Ensemble Rejection Sampling, a scheme for exact simulation from the posterior distribution of the latent states of a class of non-linear non-Gaussian state-space models. Ensemble Rejection Sampling relies on a proposal for the high-dimensional state sequence built using ensembles of state samples. Although this algorithm can be interpreted as a rejection sampling scheme acting on an extended space, we show, under regularity conditions, that the expected computational cost to obtain an exact sample increases cubically with the length of the state sequence instead of exponentially as in standard rejection sampling. We demonstrate this methodology by sampling exact state sequences according to the posterior distribution of a stochastic volatility model and a cell model. We also present an application to rare event simulation."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2024"
  },
  {
    "id": "event-2023-01",
    "date": "2023-11-13",
    "time": "15:00–16:00 JST",
    "venue": "ISM D222",
    "speaker": "矢野 恵佑, 統計数理研究所 / Keisuke Yano, Institute of Statistical Mathematics",
    "title": "(i) Reconsidering robust spectral parameter estimation and (ii) differential-geometrical clustering of geodetic velocity vectors",
    "language": "Japanese",
    "abstract": [
      "In this talk, I present my recent researches on the robust spectral parameter estimation and the clustering for the tangent bundle data. The first topic is the spectral parameter estimation based on the spectral Rényi divergence, the joint work with Tetsuya Takabatake. In this work, we study the spectral α-Rényi divergences, which includes the Itakura–Saito divergence as a subset. Although the spectral Rényi divergence has been studied in past works, its statistical properties have not been thoroughly investigated. Our aim is to investigate these properties. We find a variational representation of spectral Rényi divergence, from which the minimum spectral Rényi divergence estimator is shown to be robust against outliers in the frequency domain, unlike the minimum Itakura–Saito divergence estimator, and thus it delivers more stable estimate. The preprint for this work is https://arxiv.org/abs/2310.06902. The second topic is differential-geometrical clustering for geodetic velocity vectors, the joint work with Atsushi Takahashi and Masayuki Kano. Dense Global Navigation Satellite System (GNSS) observation data have provided clearer pictures of plate motions and crustal blocks. Identifying these crustal blocks is important and has been utilized in earthquake disaster prevention assessments. As is widely recognized, the selection of crustal blocks heavily impacts on the results of block fault models. Recently, objective methods for identifying crustal block structures have been proposed. In this work, we propose yet another objective identification method utilizing the parallel translation of tangent vectors and the rotational motion by Euler vectors. By using the sum of the two dissimilarities based on the parallel translation and the rotational motion, we propose hierarchical clustering of GNSS velocity vectors. We checked our method by using the ITRF2008 plate model and the public data provided by Altamimi et al. (2012)."
    ],
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2310.06902"
      }
    ],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-02",
    "date": "2023-10-02",
    "time": "15:00–16:00 JST",
    "venue": "ISM D222",
    "speaker": "矢田 和善, 筑波大学 / Kazuyoshi Yata, University of Tsukuba",
    "title": "Automatic sparse PCA and its applications",
    "language": "English",
    "abstract": [
      "High-dimensional data often have a low-rank structure which contains strongly spiked eigenvalues. In this talk, we consider the estimation of the strongly spiked eigenstructure. First, the conventional PCA is considered to estimate the structure, showing that the estimation holds consistency properties under severe conditions. The conventional PCA is heavily subjected to noise.",
      "Recently, consistent estimators of the strongly spiked eigenvalues and eigenvectors have been given by developing a new PCA method called the Automatic Sparse PCA (A-SPCA) methodology. To remove the noise, the A-SPCA is applied and propose a new estimation of the strongly spiked eigenstructure. We show that the proposed estimation by the A-SPCA holds the consistency properties under mild conditions and effectively improves the conventional PCA's error rate effectively. Finally, we demonstrate the A-SPCA by using microarray data sets.",
      "The talk is based on joint work with Prof. Makoto Aoshima (University of Tsukuba).",
      "Reference:",
      "Yata, K., Aoshima, M. (2023). Automatic sparse PCA for high-dimensional data. Statistica Sinica, in press (DOI: 10.5705/ss.202022.0319)."
    ],
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.5705/ss.202022.0319"
      }
    ],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-03",
    "date": "2023-08-28",
    "time": "15:00–16:00 JST",
    "venue": "ISM D222",
    "speaker": "Björn Sprungk, Technische Universität Bergakademie Freiberg",
    "title": "Noise-level robust MCMC, pushforward Markov kernels, and sampling on the sphere",
    "language": "English",
    "abstract": [
      "In the first part of the talk we consider the phenomenon of noise-level robustness of Markov chain Monte Carlo methods. Motivated by Bayesian inference with highly informative data we analyze the performance of random walk-like Metropolis-Hastings algorithms for approximate sampling of increasingly concentrating target distributions. We focus on Gaussian proposals which use a Hessian-based approximation of the target covariance. By means of pushforward transition kernels we show that for Gaussian target measures the spectral gap of the corresponding Metropolis-Hastings algorithm is independent of the concentration of the posterior, i.e., the noise level in the observational data that is used for Bayesian inference. Moreover, by exploiting the convergence of the concentrating posteriors to their Laplace approximation we extend the analysis to non-Gaussian target measures which either concentrate around a single point or along a linear manifold. In particular, in that setting we show that the average acceptance rate as well as the expected squared jump distance of suitable Metropolis-Hastings Markov chains do not deteriorate as the posterior concentrates.",
      "In the second part we further exploit the concept of pushforward Markov kernels and derive dimension-independent Markov chain Monte Carlo methods for approximate sampling of posterior measures defined on high-dimensional spheres. Such measures occur, for instance, naturally in Bayesian level set inversion. Assuming an angular central Gaussian prior which models antipodally-symmetric directional data we exploit existing dimension-independent samplers in the ambient Hilbert space such as the preconditioned Crank Nicolson Metropolis and the elliptical slice sampler and derive MCMC algorithms on the sphere, which inherit reversibility and spectral gap properties from samplers in linear spaces."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-04",
    "date": "2023-07-11",
    "time": "13:30–14:30 JST",
    "venue": "ISM D222",
    "speaker": "Charly ANDRAL, Université Paris Dauphine - PSL",
    "title": "The Importance Markov Chain",
    "language": "English",
    "abstract": [
      "The Importance Markov chain is a novel algorithm bridging the gap between rejection sampling and importance sampling, moving from one to the other through a tuning parameter. Based on a modified sample of an instrumental Markov chain targeting an instrumental distribution (typically via a MCMC kernel), the Importance Markov chain produces an extended Markov chain where the marginal distribution of the first component converges to the target distribution. For example, when targeting a multimodal distribution, the instrumental distribution can be chosen as a tempered version of the target which allows the algorithm to explore its modes more efficiently. We obtain a Law of Large Numbers and a Central Limit Theorem as well as geometric ergodicity for this extended kernel under mild assumptions on the instrumental kernel. Computationally, the algorithm is easy to implement and preexisting libraries can be used to sample from the instrumental distribution. Joint work with Randal Douc, Hugo Marival and Christian P. Robert"
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-05",
    "date": "2023-07-10",
    "time": "15:00–16:00 JST",
    "venue": "ISM D222",
    "speaker": "栗栖 大輔, 東京大学 / Daisuke Kurisu, University of Tokyo",
    "title": "Model averaging and empirical likelihood for non-Euclidean data",
    "language": "English",
    "abstract": [
      "In this talk, I talk about two topics on the statistical analysis of non-Euclidean data. First, we extend the notion of model averaging for conventional regression models to Fréchet regression, which has Euclidean predictors and a non-Euclidean output. Specifically, we propose a cross-validation (CV) criterion to select model averaging weights and show its optimality in terms of the final prediction error. Simulation results demonstrate that the CV outperforms AIC- and BIC-type model averaging estimators.",
      "Second, we consider the problem on estimating the Fréchet mean, which is a generalization of the conventional population mean. Specifically, we develop an asymptotic theory of empirical likelihood (EL) methods for the estimation and inference of the Fréchet means of Manifold-valued data. As a main result, we show that the EL statistic with an empirical Fréchet mean converge in distribution to a chi-square distribution. We also discuss several extensions of the main result."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-06",
    "date": "2023-06-19",
    "time": "15:00–16:00 JST",
    "venue": "ISM",
    "speaker": "Geoffrey Wolfer, RIKEN AIP",
    "title": "Improved Estimation of Relaxation Time in Non-reversible Markov Chains",
    "language": "English",
    "abstract": [
      "The pseudo-spectral gap of a non-reversible ergodic Markov chain, introduced by Paulin [2015], is an important parameter measuring the asymptotic rate of convergence to stationarity. We characterize up to logarithmic factors the minimax trajectory length for the problem of estimating the pseudo-spectral gap of an ergodic Markov chain in constant multiplicative error. Our result recovers the known complexity in the reversible setting for estimating the absolute spectral gap [Levin, Peres 2016, Hsu et al., 2019], and resolves a problem opened in 2019. What is more, we strengthen the known empirical procedure by making it fully-adaptive to the data, thinning the confidence intervals and reducing the computational complexity. Along the way, we derive new properties of the pseudo-spectral gap and introduce the notion of a reversible dilation of a stochastic matrix. This is joint work with Aryeh Kontorovich (Ben-Gurion University of the Negev). arXiv: https://arxiv.org/abs/2209.00175"
    ],
    "links": [
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2209.00175"
      }
    ],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-07",
    "date": "2023-04-17",
    "time": "15:00–16:00 JST",
    "venue": "ISM",
    "speaker": "仲北 祥悟, 東京大学 / Shogo Nakakita, University of Tokyo",
    "title": "A non-asymptotic analysis of Langevin-type Monte Carlo methods for non-convex and non-smooth potentials",
    "language": "English",
    "abstract": [
      "This study introduces a theoretical guarantee for Langevin-type Monte Carlo methods for dissipative potentials whose weak gradients have bounded moduli of continuity. The main theorem gives a non-asymptotic upper bound for the 2-Wasserstein distance between the law of a stochastic gradient Langevin Monte Carlo algorithm and the Gibbs distribution. We apply this result to the analysis of the Langevin Monte Carlo algorithm for weakly smooth potentials and the proposal of Langevin-type algorithms for potentials without convexity or continuous differentiability."
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  },
  {
    "id": "event-2023-08",
    "date": "2023-03-03",
    "time": "13:30–14:30 JST",
    "venue": "ISM",
    "speaker": "廣瀬 慧, 九州大学 / Kei Hirose, Kyushu University",
    "title": "材料科学及びエネルギー科学における統計解析",
    "language": "Japanese",
    "abstract": [
      "本講演では、講演者が近年関わっている材料科学とエネルギー科学における統計解析について述べる。これらの分野では、欠測データ解析や高次元時系列解析における高度な解析手法の提案が必要とされる。そこで、講演者がこれまで提案したいくつかの手法について紹介する。また、その手法をどのようにしたら使ってもらえるようになるのか（産業界への貢献）についても検討する。"
    ],
    "links": [],
    "source": "https://sites.google.com/view/bayescompjp/seminar/2023"
  }
];
