// 히어로 그래프. 실제로 운영 중인 클러스터와 프로젝트 구성을 그대로 옮김
// x, y 는 0~1 정규 좌표, 데스크톱에서 화면 오른쪽에 모이도록 배치

export type TopoNode = { id: string; label: string; group: 'msa' | 'morris' | 'platform' | 'app'; x: number; y: number }

export const topoNodes: TopoNode[] = [
  { id: 'actions', label: 'github-actions', group: 'platform', x: 0.5, y: 0.14 },
  { id: 'ghcr', label: 'ghcr', group: 'platform', x: 0.64, y: 0.1 },
  { id: 'manifests', label: 'manifests', group: 'platform', x: 0.78, y: 0.16 },
  { id: 'argocd', label: 'argo-cd', group: 'platform', x: 0.72, y: 0.32 },
  { id: 'sealed', label: 'sealed-secrets', group: 'platform', x: 0.9, y: 0.3 },
  { id: 'gateway', label: 'api-gateway', group: 'msa', x: 0.56, y: 0.48 },
  { id: 'user', label: 'user-service', group: 'msa', x: 0.44, y: 0.62 },
  { id: 'order', label: 'order-service', group: 'msa', x: 0.6, y: 0.68 },
  { id: 'product', label: 'product-service', group: 'msa', x: 0.74, y: 0.58 },
  { id: 'kafka', label: 'kafka', group: 'msa', x: 0.66, y: 0.84 },
  { id: 'game', label: 'game-server', group: 'morris', x: 0.88, y: 0.52 },
  { id: 'redis', label: 'redis', group: 'morris', x: 0.94, y: 0.7 },
  { id: 'mysql', label: 'mysql', group: 'morris', x: 0.82, y: 0.78 },
  { id: 'github', label: 'github-api', group: 'app', x: 0.36, y: 0.32 },
  { id: 'quotes', label: 'upbit · toss', group: 'app', x: 0.3, y: 0.7 },
  { id: 'cairn', label: 'cairn', group: 'app', x: 0.3, y: 0.18 },
  { id: 'orbit', label: 'orbit', group: 'app', x: 0.4, y: 0.84 },
]

export const topoEdges: [string, string][] = [
  ['actions', 'ghcr'],
  ['ghcr', 'manifests'],
  ['manifests', 'argocd'],
  ['sealed', 'argocd'],
  ['argocd', 'gateway'],
  ['argocd', 'game'],
  ['gateway', 'user'],
  ['gateway', 'order'],
  ['gateway', 'product'],
  ['order', 'kafka'],
  ['product', 'kafka'],
  ['user', 'kafka'],
  ['game', 'redis'],
  ['game', 'mysql'],
  ['github', 'cairn'],
  ['quotes', 'orbit'],
]
