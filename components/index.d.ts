import type { ReactNode } from 'react';
export type GlyphName = string; // see components/Glyph preview, or Proof.glyphNames
export interface GlyphProps { name: GlyphName; size?: number; weight?: number; title?: string; className?: string }
export interface PatternProps { kind?: 'barcode' | 'halftone' | 'dots' | 'ticks' | 'stripes' | 'hatch' | 'checker' | 'grid' | 'crosses' | 'ruler' | 'steps' | 'waves' | 'chevrons'; height?: number; tone?: 'lime' | 'violet' | 'gray'; seed?: string; className?: string }
export interface ButtonProps { variant?: 'default' | 'accent' | 'ink'; size?: 'md' | 'sm'; icon?: GlyphName; href?: string; onClick?: () => void; type?: 'button' | 'submit'; disabled?: boolean; className?: string; children: ReactNode }
export interface IconButtonProps { icon: GlyphName; label: string; variant?: 'default' | 'accent' | 'ink'; onClick?: () => void; disabled?: boolean }
export interface TagProps { variant?: 'outline' | 'default' | 'experimental' | 'private' | 'success' | 'warning' | 'danger'; className?: string; children: ReactNode }
export interface StatusProps { kind?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'; children: ReactNode }
export interface InputProps { label: string; hint?: string; error?: string; type?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; disabled?: boolean }
export interface SelectProps { label: string; options: Array<string | { value: string; label: string }>; hint?: string; error?: string; value?: string; defaultValue?: string; onChange?: (e: any) => void; disabled?: boolean }
export interface CheckboxProps { label: string; radio?: boolean; name?: string; checked?: boolean; defaultChecked?: boolean; onChange?: (e: any) => void; disabled?: boolean }
export interface SwitchProps { label: string; on?: boolean; defaultOn?: boolean; onChange?: (on: boolean) => void; disabled?: boolean }
export interface CardProps { eyebrow?: string; title?: string; tone?: 'default' | 'accent' | 'invert'; footer?: ReactNode; children?: ReactNode }
export interface StatProps { label: string; value: string; delta?: string; note?: string }
export interface TabsProps { tabs: Array<{ id: string; label: string; content: ReactNode }>; defaultId?: string }
export interface DisclosureProps { items: Array<{ title: string; content: ReactNode; open?: boolean }> }
export interface ProgressProps { value: number; max?: number; label?: string }
export interface CalloutProps { title: string; tone?: 'default' | 'warning' | 'danger' | 'success'; icon?: GlyphName | false; children: ReactNode }
export interface BannerProps { tag: string; title: string; actions?: ReactNode; children: ReactNode }
export interface CodeBlockProps { label?: string; prompt?: boolean; lines: Array<string | { cmd: string; comment?: string }> }
export interface DataTableProps { columns: string[]; rows: ReactNode[][] }
export interface RowListProps { rows: Array<{ title: string; description: string; tag?: string; tagVariant?: TagProps['variant'] }> }
export interface StepsProps { steps: Array<{ title: string; detail: string }> }
export interface TileGridProps { tiles: Array<{ title: string; description: string; label?: string; icon?: GlyphName; href?: string; tag?: string; tagVariant?: TagProps['variant'] }> }
export interface BandProps { headline: string; meta?: string; plate?: string; plateLabel?: string; tone?: 'lime' | 'ink'; children?: ReactNode }
export interface TopbarProps { name: string; mark?: string; links?: Array<{ href: string; label: string }>; actions?: ReactNode }
export interface HeroProps { title: string; left?: ReactNode; right?: ReactNode; children?: ReactNode }
export interface SectionProps { id?: string; title: string; lead?: string; children: ReactNode }
export interface StatusBarProps { items?: Array<{ label: string; on?: boolean }>; seed?: string; seed2?: string; left?: string; right?: string }
export interface FooterProps { title: ReactNode; links?: Array<{ href: string; label: string }>; seed?: string }
